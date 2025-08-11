export type CMSP = {
  id: string;
  name: string;
  type: "Broker" | "Dealer" | "Adviser" | "Custodian";
  licensedDate: string;
  description: string;
  overview: string;
  licenseStatus: string;
  aims: string;
  capital?: string;
  branches?: number;
  logoUrl?: string;
};