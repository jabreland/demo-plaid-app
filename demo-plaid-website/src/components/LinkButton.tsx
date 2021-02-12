import { useMutation } from '@apollo/client';
import { ReactElement, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { usePlaidLink } from 'react-plaid-link';
import { LINK_TOKEN } from '../graphQL/queries';

interface LinkButtonProps {
  publicToken: string;
  confirmLinked(arg0: boolean): void;
}

export function LinkButton({publicToken, confirmLinked}: LinkButtonProps): ReactElement {
  const [sendLinkToken, {data}] = useMutation(LINK_TOKEN);
  const onSuccess = useCallback((token) => {
    try{
    sendLinkToken({variables: { token: token }})
    } catch(e) {
      console.log(e.message)
      throw new Error("Error exchanging key with server");
    }
    confirmLinked(true);
  }, []);

  const config = {
    token: publicToken,
    onSuccess
  }

  const { open, ready, error } = usePlaidLink(config)

  if(error) {
    console.log("Error:", error?.message)
  } 

  return  (
    <Button variant="primary" onClick={() => open()} disabled={!ready}>Connect to Plaid</Button>
  );
}


