import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { User } from "firebase/auth";

import { getAllQuestionsWithPagination, getExistingUser } from "@/lib/api";
import { IResponseGetQuestionPagination, UserProfile } from "@/lib/types";

export const useQuestionListPagination = (
  user: User,
  limit: number,
  config?: UseInfiniteQueryOptions<IResponseGetQuestionPagination, Error>,
): UseInfiniteQueryResult<IResponseGetQuestionPagination, Error> => {
  return useInfiniteQuery<IResponseGetQuestionPagination, Error>(
    ["/questions", user?.uid],
    async ({ pageParam }): Promise<IResponseGetQuestionPagination> =>
      getAllQuestionsWithPagination({
        user: user,
        limit: limit,
        cursor: pageParam ?? "",
      }),
    {
      ...config,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      getPreviousPageParam: (firstPage) => firstPage.next ?? undefined,
      getNextPageParam: (firstPage) => {
        return firstPage.next ?? undefined;
      },
    },
  );
};

export const useOwner = (
  user: User,
  config?: UseQueryOptions<{ data: UserProfile }, Error>,
): UseQueryResult<{ data: UserProfile }, Error> => {
  return useQuery<{ data: UserProfile }, Error>(
    ['/owner', user?.uid],
    async (): Promise<{ data: UserProfile }> => getExistingUser(user),
    config,
  )
}