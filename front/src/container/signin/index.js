import "./index.css";
import Page from "../../component/page";
import Back from "../../component/back";
import Status from "../../component/status";

export default function Component() {
  return (
    <Page>
      <Status />
      <Back />
    </Page>
  );
}
