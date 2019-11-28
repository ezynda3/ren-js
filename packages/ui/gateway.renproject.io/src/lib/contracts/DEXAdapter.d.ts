/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import Contract, { contractOptions } from "web3/eth/contract";
import { EventLog, Callback, EventEmitter } from "web3/types";
import { TransactionObject, BlockType } from "web3/eth/types";
import { ContractEvent } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class DEXAdapter extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: contractOptions
  );
  clone(): DEXAdapter;
  address: string;
  methods: {
    dex(): TransactionObject<string>;

    shifterRegistry(): TransactionObject<string>;

    recoverTokens(_token: string): TransactionObject<void>;

    trade(
      _src: string,
      _dst: string,
      _minDstAmt: number | string,
      _to: string | number[],
      _refundBN: number | string,
      _refundAddress: string | number[],
      _amount: number | string,
      _nHash: string | number[],
      _sig: string | number[]
    ): TransactionObject<void>;

    hashTradePayload(
      _src: string,
      _dst: string,
      _minDstAmt: number | string,
      _to: string | number[],
      _refundBN: number | string,
      _refundAddress: string | number[]
    ): TransactionObject<string>;

    hashLiquidityPayload(
      _liquidityProvider: string,
      _maxBaseToken: number | string,
      _token: string,
      _refundBN: number | string,
      _refundAddress: string | number[]
    ): TransactionObject<string>;

    encodePayload(
      _src: string,
      _dst: string,
      _minDstAmt: number | string,
      _to: string | number[],
      _refundBN: number | string,
      _refundAddress: string | number[]
    ): TransactionObject<string>;

    addLiquidity(
      _liquidityProvider: string,
      _maxBaseToken: number | string,
      _token: string,
      _deadline: number | string,
      _refundAddress: string | number[],
      _amount: number | string,
      _nHash: string | number[],
      _sig: string | number[]
    ): TransactionObject<BN>;

    removeLiquidity(
      _token: string,
      _liquidity: number | string,
      _tokenAddress: string | number[]
    ): TransactionObject<void>;

    calculateReceiveAmount(
      _src: string,
      _dst: string,
      _sendAmount: number | string
    ): TransactionObject<BN>;
  };
  events: {
    LogTransferIn: ContractEvent<{
      src: string;
      amount: BN;
      0: string;
      1: BN;
    }>;
    LogTransferOut: ContractEvent<{
      dst: string;
      amount: BN;
      0: string;
      1: BN;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}