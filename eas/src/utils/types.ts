 
export type EASChainConfig = {
  chainId: number;
  chainName: string;
  version: string;
  contractAddress: string;
  schemaRegistryAddress: string;
  resolverAddress: string;
  etherscanURL: string;
  /** Must contain a trailing dot (unless mainnet). */
  subdomain: string;
  contractStartBlock: number;
  rpcProvider: string;
};

export interface AttestationResult {
  data: Data;
}

export interface MyAttestationResult {
  data: MyData;
}

export interface EnsNamesResult {
  data: {
    ensNames: { id: string; name: string }[];
  };
}

export interface Data {
  attestation: Attestation | null;
}

export interface MyData {
  attestations: Attestation[];
}

export interface Attestation {
  id: string;
  attester: string;
  recipient: string;
  refUID: string;
  revocationTime: number;
  expirationTime: number;
  time: number;
  txid: string;
  data: string;
}

export type ResolvedAttestation = Attestation & {
  name: string;
  confirmation?: Attestation;
};
 
export interface SchemaResult {
  data: DataSchema;
}
export interface DataSchema {
  schema: Schema | null;
}
export interface Schema {
  id: string;
  schema: string;
  creator: string;
  resolver: string;
  revocable: boolean;
  index: string;
  txid: string;
  time: number; 
}
 
 
export interface MyTimestampResult {
  data: MyTimestampData;
}
export interface MyTimestampData {
  timestamps: Timestamp[];
}
export interface Timestamp {
  from: string;
  id: string;
  timestamp: number;
}
 