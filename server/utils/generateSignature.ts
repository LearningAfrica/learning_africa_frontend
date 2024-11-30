import { KJUR } from "jsrsasign";

export function generateSignature(sessionName: string, role: number) {
  const runtimeConfig = useRuntimeConfig();
  const sdkKey = runtimeConfig.ZoomVideoSDKKey;
  const sdkSecret = runtimeConfig.ZoomVideoSDKSecret;
  console.log({runtimeConfig});

  if (!sdkKey || !sdkSecret) {
    throw new Error("Missing ZOOM_SDK_KEY or ZOOM_SDK_SECRET");
  }
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;
  const oHeader = { alg: "HS256", typ: "JWT" };
  const oPayload = {
    app_key: sdkKey, tpc: sessionName, role_type: role, version: 1, iat: iat, exp: exp,
  };
  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
  return sdkJWT;
}