import { AxiosError } from "axios";
type OrganizationType = {
	id: string
	name: string
	logo_url?: string
}

export const useOrganizations = () => {
    const { $privateAxios } = useNuxtApp();
    const organizationKey = 'organizations-cache-key'
    const organizations = useState("organizations-data", () => ([]) as OrganizationType[]);
    const fetch_error = useState<AxiosError | Error | null>(
        "organizations-fetch-error",
        () => null
    );
    const has_error = useState<boolean>(
        "organizations-courses-loading",
        () => false
    );
    const is_loading = useState<boolean>(
        "organizations-courses-loading",
        () => false
    );
    const cache = useState<{ [key: string]: OrganizationType[] }>(
        "organizations-cache",
        () => ({})
    );


    const fetchData = async (bypass_cache: boolean = false) => {

        is_loading.value = true;
        try {
            if (!bypass_cache) {// Check if the data is already in the cache
                if (!cache.value[organizationKey]) {
                    cache.value[organizationKey] = []
                }
                if (cache.value[organizationKey].length > 0) {
                    console.log("Returning cached data for", organizationKey);
                    organizations.value = cache.value[organizationKey];

                    return cache.value[organizationKey];
                }
            }

            // Fetch data from the API
            const response = await $privateAxios.get("/api/organizations/",);

            const data = response.data as OrganizationType[]

            // Store the fetched data in the cache
            cache.value[organizationKey] = data;

            // Set the organizations state with the fetched data
            organizations.value = data;

            return data;
        } catch (err: any) {
            if (err instanceof AxiosError) {
                fetch_error.value = err;
            } else {
                fetch_error.value = err;
            }
            has_error.value = true;
        } finally {
            is_loading.value = false;
        }
    };


    const refreshData = async () => {
        // Fetch new data with updated options
        await fetchData(true);
    };

    return {
        data: organizations,
        is_loading: is_loading,
        has_error: has_error,
        fetch_error: fetch_error,
        fetchData,
        refreshData
    };
};
