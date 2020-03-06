import BigNumber from "bignumber.js";

import { BN } from "../general";
import { RenContract } from "../renVM";
import {
    AllParams4, BaseContractCall, ContractCallMultiple, DetailedContractCall, provider,
} from "./common";

export interface ShiftOutParamsCommon {
    sendToken: RenContract | "BTC" | "ZEC" | "BCH"; // The token, including the origin and destination chains
}

export interface BurnContractCallSimple extends BaseContractCall {
    sendAmount: BN | BigNumber | number | string; // The amount of `sendToken` to be sent
}

export type BurnContractCallSingle = DetailedContractCall | BurnContractCallSimple;

export type BurnContractCall = BurnContractCallSingle | ContractCallMultiple<DetailedContractCall>;

/*******************************************************************************
 * Option 1: Provide details to submit a burn to Ethereum and then RenVM.
 ******************************************************************************/

export type ShiftOutParamsContractCall = ShiftOutParamsCommon & BurnContractCall & {
    web3Provider: provider; // A Web3 provider
};

/*******************************************************************************
 * Option 2: Provide an Ethereum transaction to be submitted to RenVM.
 ******************************************************************************/

export interface ShiftOutParamsTxHash extends ShiftOutParamsCommon {
    ethTxHash: string; // The hash of the burn transaction on Ethereum
}

/*******************************************************************************
 * Option 3: Provide an the burn reference from Ethereum. This can be used to
 * track RenVM's progress.
 ******************************************************************************/

export interface ShiftOutParamsBurnRef extends ShiftOutParamsCommon {
    burnReference: string | number; // The reference ID of the burn emitted in the contract log
}

export interface ShiftOutParamsRenTxHash {
    renTxHash: string;
}

/******************************************************************************/

export type ShiftOutParamsContractCallAll = ContractCallMultiple<((web3Provider: provider) => Promise<DetailedContractCall>) | Promise<DetailedContractCall> | DetailedContractCall> & { web3Provider: provider };

export type ShiftOutParamsAll = (AllParams4<ShiftOutParamsContractCallAll, ShiftOutParamsTxHash, ShiftOutParamsBurnRef, ShiftOutParamsRenTxHash>) & { sendToken: RenContract };

export type ShiftOutParams = ShiftOutParamsContractCall | ShiftOutParamsBurnRef | ShiftOutParamsTxHash | ShiftOutParamsRenTxHash;