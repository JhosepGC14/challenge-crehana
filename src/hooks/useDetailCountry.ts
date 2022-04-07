import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailCountry } from "../graphql/hooks/custom-hooks";

export const useDetailCountry = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [getDetailCountry, { data }] = useGetDetailCountry();

  useEffect(() => {
    if (params.countryId)
      getDetailCountry({ variables: { codeCountry: params.countryId } });
  }, [params]);

  return { navigate, params, data };
};