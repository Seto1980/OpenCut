export const dynamic = 'force-static';
import { auth } from "@/auth/server";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
