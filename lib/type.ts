export interface AddressInfo {
  creator_address_hash: string;
  creation_tx_hash: string;
  ens_domain_name: string;
  token: {
    circulating_market_cap: string;
    icon_url: string;
    name: string;
    decimals: string;
    symbol: string;
    address: string;
    type: string;
    holders: string;
    exchange_rate: string;
    total_supply: string;
  };
  coin_balance: string;
  exchange_rate: string;
  implementation_address: string;
  block_number_balance_updated_at: number;
  hash: string;
  implementation_name: string;
  name: string;
  is_contract: boolean;
  private_tags: [
    {
      address_hash: string;
      display_name: string;
      label: string;
    },
  ];
  watchlist_names: [
    {
      display_name: string;
      label: string;
    },
  ];
  public_tags: [
    {
      address_hash: string;
      display_name: string;
      label: string;
    },
  ];
  is_verified: boolean;
  has_beacon_chain_withdrawals: boolean;
  has_custom_methods_read: boolean;
  has_custom_methods_write: boolean;
  has_decompiled_code: boolean;
  has_logs: boolean;
  has_methods_read: boolean;
  has_methods_write: boolean;
  has_methods_read_proxy: boolean;
  has_methods_write_proxy: boolean;
  has_token_transfers: boolean;
  has_tokens: boolean;
  has_validated_blocks: boolean;
}

export interface Transaction {
  timestamp: string;
  fee: {
    type: string;
    value: string;
  };
  gas_limit: string;
  block: number;
  status: string;
  method: string;
  confirmations: number;
  type: number;
  exchange_rate: string;
  to: {
    ens_domain_name: string;
    hash: string;
    implementation_address: string;
    implementation_name: string;
    implementations: [
      {
        address: string;
        name: string;
      },
    ];
    is_contract: boolean;
    is_verified: boolean;
    metadata: null;
    name: string;
    private_tags: [];
    public_tags: [];
    watchlist_names: [];
  };
  tx_burnt_fee: string;
  max_fee_per_gas: string;
  result: string;
  hash: string;
  gas_price: string;
  priority_fee: string;
  base_fee_per_gas: string;
  tx_types: string[];
  from: {
    ens_domain_name: string;
    hash: string;
    implementation_address: null;
    implementation_name: null;
    implementations: [];
    is_contract: boolean;
    is_verified: boolean;
    metadata: null;
    name: null;
    private_tags: [];
    public_tags: [];
    watchlist_names: [];
  };
}
