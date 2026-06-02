export default function UserInputForm() {
  return (
    <div id="user-input">
      <span className="input-group">
        <span>
            <label>INITIAL INVESTMENT</label>
            <input type="number"></input>
        </span>
        <span>
            <label>ANNUAL INVESTMENT</label>
            <input type="number"></input>
        </span>
      </span>
      <span className="input-group">
        <span>
            <label>EXPECTED RETURN</label>
            <input type="number"></input>
        </span>
        <span>
            <label>DURATION</label>
            <input type="number" min={0}></input>
        </span>
      </span>
    </div>
  );
}
