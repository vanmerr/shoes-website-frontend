const { useGet } = require("@/useHooks/useFetch");

const getAllProducts = (page) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, result } = useGet(`/products/getAll?page=${page}`);
  return {
    loading,
    error,
    result,
  };
};

export { getAllProducts };
