export default function UserInputForm({ handleForm, formData }) {
  return (
    <div id="user-input">
      <span className="input-group">
        <span>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={handleForm}
          ></input>
        </span>
        <span>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            value={formData.annualInvestment}
            onChange={handleForm}
          ></input>
        </span>
      </span>
      <span className="input-group">
        <span>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            name="expectedReturn"
            value={formData.expectedReturn}
            onChange={handleForm}
          ></input>
        </span>
        <span>
          <label>DURATION</label>
          <input
            type="number"
            min={1}
            name="duration"
            value={formData.duration}
            onChange={handleForm}
          ></input>
        </span>
      </span>
    </div>
  );
}
