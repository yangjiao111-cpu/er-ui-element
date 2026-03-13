import Notification from "./methods";
import { withInstallFunction } from "@er-ui-element/utils";

export const ErNotification = withInstallFunction(Notification, "$notify");

export * from "./types";
