import { useEffect, useState } from "react";
import { api } from "../api/api";

interface UseProps {
  endpoint: string;
}

export function useApi({ endpoint }: UseProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(endpoint)
      .then(async (res) => {
        const data = await res.data;

        setValue(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [endpoint]);

  return { isLoading, value, error };
}
