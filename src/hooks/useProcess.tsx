/*import { useState, useEffect } from "react";
import { GetListProcesso } from "../services/process";
import { IProcesso } from "../interfaces/IProcesso";
import { useScroll } from "./useScroll";

export const useProcesso = () => {
  const [processos, setProcessos] = useState<IProcesso[]>([]);
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setScroll, currentPage, setCurrentPage, loaderRef } = useScroll();
  const [fazerNovaRequisicao, setFazerNovaRequisicao] = useState(true);
  const [totalResultados, setTotalResultados] = useState<number>(0);
  const [filtroTipoProcesso, setFiltroTipoProcesso] = useState<Array<string>>(
    []
  );

  async function buscarListaProcessos(
    concatenarListaProcessos: boolean,
    pagina: number
  ) {
    setIsLoading(true);

    let filters = search;

    if (filtroTipoProcesso.length > 0) {
      //filters = "47167";
      filters += "&tipoProcesso=[" + filtroTipoProcesso + "]";
    }

    const response = await GetListProcesso(pagina, 10, filters);
    setMsg("");
    setTotalResultados(0);

    if (response.status == 200) {
      if (response.data.processos.length > 0) {
        if (concatenarListaProcessos) {
          setProcessos(processos.concat(response.data.processos));
        } else {
          setProcessos(response.data.processos);
        }
        if (response.data.pages == pagina) {
          setFazerNovaRequisicao(false);
        } else {
          setFazerNovaRequisicao(true);
        }
        setTotalResultados(response.data.total);
      } else {
        setProcessos([]);
      }

      setScroll();
    } else {
      setMsg(response.message);
      setProcessos([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const intervaloBusca = setTimeout(() => {
      let concatenarListaProcessos = false;
      let pagina = 1;
      setFazerNovaRequisicao(true);

      //para não disparar a busca dos processos pelo useEffect do currentPage
      //quando por exemplo tiver rolado para a 3ª página e colocar um novo filtro
      if (currentPage > 1) {
        setCurrentPage(0);
      }
      setProcessos([]);
      buscarListaProcessos(concatenarListaProcessos, pagina);
    }, 800);
    return () => clearTimeout(intervaloBusca);
  }, [search]);

  useEffect(() => {
    //só busca pelo current page apartir da 2ª página
    if (currentPage > 1 && fazerNovaRequisicao) {
      let concatenarListaProcessos = true;
      buscarListaProcessos(concatenarListaProcessos, currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (filtroTipoProcesso.length > 0) {
      let concatenarListaProcessos = false;
      let pagina = 1;
      setProcessos([]);
      buscarListaProcessos(concatenarListaProcessos, pagina);
    }
  }, [filtroTipoProcesso]);

  return {
    processos,
    buscarListaProcessos,
    msg,
    setSearch,
    isLoading,
    loaderRef,
    totalResultados,
    setFiltroTipoProcesso,
    filtroTipoProcesso,
  };
};
*/
