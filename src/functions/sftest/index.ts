import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  environment: {
    // PROVIDE YOUR SF CREDENTIALS HERE
    SF_ACCOUNT: "",
    SF_DATABASE: "",
    SF_USERNAME: "",
    SF_PASSWORD: "",
    SF_ROLE: "",
    SF_WAREHOUSE: "",
  },
  timeout: 900,
};
