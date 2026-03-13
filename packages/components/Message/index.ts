import Message from "./methods";
import { withInstallFunction } from "@er-ui-element/utils";

export const ErMessage = withInstallFunction(Message, "$message");

export * from "./types";
