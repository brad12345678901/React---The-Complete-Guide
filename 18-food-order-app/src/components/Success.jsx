import Button from "./Button";

export default function Success({ close }) {
  return (
    <div className="success">
      <h2>Success!</h2>
      <p>Your order has been successfully processed!</p>
      <p>Details about your order will be given to you shortly</p>
      <div className="modal-actions">
        <Button onClick={close} type="button" fallbackText="Close">
          Close
        </Button>
      </div>
    </div>
  );
}
