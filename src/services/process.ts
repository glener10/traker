/*import api from "./api";
import { AxiosResponse, AxiosError } from "axios";

export async function GetListProcesso(
  currentPage: number,
  limit: number,
  search: string
) {
  let filtro = "&search=" + search;

  const response = await api
    .get("/processo?_page=" + currentPage + "&_limit=" + limit + filtro)
    .then((response: AxiosResponse<{ user: { name: string } }>) => {
      return response;
    })
    .catch((reason: AxiosError<{ additionalInfo: string }>) => {
      var response: any = {
        status: reason.code,
        message: reason.message,
      };

      return response;
    });

  return response;
}

export async function GetProcesso(id: number) {
  return await api
    .get("/processo/" + id)
    .then((response: AxiosResponse<{ user: { name: string } }>) => {
      return response.data;
    })
    .catch((reason: AxiosError<{ additionalInfo: string }>) => {
      return "Erro ao buscar processo! " + reason.message;
    });
}

//export async function PutProcesso() { }
//export async function PatchProcesso() { }
//export async function DeleteProcesso() { }
*/
