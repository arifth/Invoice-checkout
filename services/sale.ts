import ky from "ky-universal";
import { createMutation, createQuery } from "react-query-kit";
import constants from "@/app/constants";

const { ROOT_API } = constants

const getListSale = createQuery<
  { id: number; title: string }[],
  { limit: number }
>({
  queryKey: ["posts"],
  fetcher: async (variables) => {
    const limit = variables.limit ?? 10;
    const parsed: any = await ky(
      `${ROOT_API}/posts`,
    ).json();
    const result = parsed.filter((x: { id: number; }) => x.id <= limit);
    return result;
  },
});


const getSaleByID = createQuery<
  { id: number; title: string }[],
  { limit: number }
>({
  queryKey: ["posts"],
  fetcher: async (variables) => {
    const limit = variables.limit ?? 10;
    const parsed: any = await ky(
      `${ROOT_API}/posts`,
    ).json();
    const result = parsed.filter((x: { id: number; }) => x.id <= limit);
    return result;
  },
});

const createSale = createMutation<
  { id: number; title: string }[],
  { limit: number }
>({
mutationFn: async (variables) => {
    const limit = variables.limit ?? 10;
    const parsed: any = await ky.post(
      `${ROOT_API}/posts`,
    ).json();
    const result = parsed.filter((x: { id: number; }) => x.id <= limit);
    return result;
  },
});

const updateSale = createMutation<
  { id: number; title: string }[],
  { limit: number }
>({
mutationFn: async (variables) => {
    const limit = variables.limit ?? 10;
    const parsed: any = await ky.post(
      `${ROOT_API}/posts`,
    ).json();
    const result = parsed.filter((x: { id: number; }) => x.id <= limit);
    return result;
  },
});

const deleteSale = createMutation<
  { id: number; title: string }[],
  { limit: number }
>({
mutationFn: async (variables) => {
    const limit = variables.limit ?? 10;
    const parsed: any = await ky.post(
      `${ROOT_API}/posts`,
    ).json();
    const result = parsed.filter((x: { id: number; }) => x.id <= limit);
    return result;
  },
});


export default {
    getListSale,getSaleByID,createSale,updateSale,deleteSale
}