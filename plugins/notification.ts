import Swal from "sweetalert2";

export default defineNuxtPlugin(() => {
	return {
		provide: {
			notify: Swal
		}
	};
});
