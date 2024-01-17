import { Location, useParams, useSearchParams } from 'react-router-dom';

type ParamHookProps = {
	location: Location;
};
export default function useParamHook({ location }: ParamHookProps) {
	const objectify = (searchParams: URLSearchParams) => {
		const obj = {} as { [key: string]: string };
		for (const [key] of searchParams) {
			obj[key] = searchParams.get(key)!
		}
		return obj;
	};
	const searchParam = new URLSearchParams(location.search);

	const [qParams, setQParams] = useSearchParams();
	const param = useParams();

	return {
		qParams,
		setQParams,
		searchParam: objectify(searchParam),
		param
	};
}
