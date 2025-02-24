import { ObservableQuery } from "@keplr-wallet/stores";
import { StablePoolRaw, WeightedPoolRaw } from "@osmosis-labs/pools";

import { ObservableQueryPool } from "./pool";

export interface PoolGetter<PoolType> {
  getPool(id: string): PoolType | undefined;
  poolExists(id: string): boolean | undefined;
  getAllPools(): PoolType[];
}

export interface ObservableQueryPoolGetter
  extends PoolGetter<ObservableQueryPool>,
    ObservableQuery {
  paginate(): void;
  fetchRemainingPools(): void;
}

export type Pools = {
  pools: (WeightedPoolRaw | StablePoolRaw)[];
};

export type NumPools = {
  num_pools: string;
};

export type Head<T extends any[]> = T extends [...infer Head, any]
  ? Head
  : any[];
