import { CSVImporter } from "@maple-billing/csv-import-react";
import { useState } from "react";
import "./App.css";

function App() {
  const template = {
    columns: [
      {
        name: "Contact Name",
        key: "name",
        required: false,
      },
      {
        name: "Contact Email",
        key: "email",
        required: true,
      },
      {
        name: "Organization Name",
        key: "organization_name",
        required: false,
      },
      {
        name: "External Identifier",
        key: "external_identifier",
        required: true,
      },
      {
        name: "Billing Emails",
        key: "billing_emails",
        required: false,
      },
      {
        name: "Phone Number",
        key: "phone_number",
        required: false,
      },
    ],
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button className="button" onClick={() => setIsOpen((prev) => !prev)}>
        Open
      </button>

      <CSVImporter
        isModal={true}
        modalIsOpen={isOpen}
        darkMode={false}
        template={template}
        modalOnCloseTriggered={() => setIsOpen(false)}
        modalCloseOnOutsideClick={true}
        saveProperties={true}
        onComplete={(data) => {console.log(data)}}
        modalTitle={"Event Import"}
      />
    </div>
  );
}

export default App;
