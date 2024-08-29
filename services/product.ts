import ky from "ky-universal";
import { createQuery } from "react-query-kit";
import constants from "@/app/constants";

const { ROOT_API,PRODUCT_KEY } = constants

const getListProduct = createQuery<
  { id: number; title: string }[],
  { limit: number }
>({
  queryKey: [PRODUCT_KEY],
  fetcher: async (variables) => {
    const limit = variables.limit ?? 10;
    const parsed: any = await ky(
      `${ROOT_API}/posts`,
    ).json();
    const result = parsed.filter((x: { id: number; }) => x.id <= limit);
    return result;
  },
});





export default {
  getListProduct
}