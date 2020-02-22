import React from "react";

function Quote() {
  return (
    <form>
      <label>Get A Quote</label>
      <br/>
      <input type="text" name="height" value="" placeholder="Height" />
      <input type="text" name="length" value="" placeholder="Length" />
      <br/>
      <select name="itemList" required>
      <option value="" disabled selected hidden>Choose a Frame</option>
        <option value="frame1">Test Frame 1</option>
        <option value="frame2">Test Frame 2</option>
        <option value="frame3">Test Frame 3</option>
      </select>
      <input type="submit"></input>

    </form>
  );
}

export default Quote;
