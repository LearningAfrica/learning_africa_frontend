import { useParams, useSearchParams } from "next/navigation";

type ParamHookProps = {
  location: Location;
};
export default function useParamHook({ location }: ParamHookProps) {
  const objectify = (searchParams: URLSearchParams) => {
    const obj = {} as { [key: string]: string };
    for (const [key] of searchParams) {
      obj[key] = searchParams.get(key)!;
    }
    return obj;
  };
  const searchParam = new URLSearchParams(location.search);

  const params = useSearchParams();
  const param = useParams();

  return {
    searchParam: objectify(searchParam),
    param,
    params,
  };
}
