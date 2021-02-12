import { Button, Modal } from 'react-bootstrap';
import { LinkButton } from './LinkButton';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PlaidLinkModalProps {
    show: boolean;
    publicToken: string | undefined;
    handleClose(arg0: boolean): void;
    confirmLinked(arg0: boolean): void;
}

export default function PlaidLinkModal({show, handleClose, publicToken, confirmLinked} : PlaidLinkModalProps) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Plaid Demo App</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Press the Button Below to connect to a Plaid dummy Bank Account. Account name is good_user, password is pass_good
            </Modal.Body>
            <Modal.Footer>
                {publicToken && <LinkButton confirmLinked={confirmLinked} publicToken={publicToken} />}
                <Button variant="secondary" onClick={()=>handleClose(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}
