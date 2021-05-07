import React from "react";

export default function transfer() {
  return (
    <form>
        Amount:
        <input type="text" name="name" />
        <br/><br/>
        Pay to:
        <input type="text" name="payto" />
        <br/><br/>
        Message:
        <input type="text" name="message" />
        <br/><br/>
        Is this an eGift?:
        <input type="checkbox" name="egift"/>
        <br/><br/>
        <input type="submit" value="Submit" />
    </form>
  );
}