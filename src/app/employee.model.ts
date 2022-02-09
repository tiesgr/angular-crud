export interface employee {
  name: string;
  surname: string;
  am: number;
  brandCode: number;
  brandName: string;
  quantity: number;
}
export interface receivedPackets {
  dateReceived: Date;
  brandCode: number;
  brandName: string;
  quantity: number;
  am: number;
}
export interface bundles {
  bundle:
  {
    code:string;
    packets:string[];
  }[];
  packetsOnly:string[];
  am:number;
}