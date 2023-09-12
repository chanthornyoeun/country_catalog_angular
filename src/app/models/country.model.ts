export interface Country {
    flags: Flags;
    name: CountryName;
    cca2: string;
    cca3: string;
    idd: Idd;
    altSpellings: string[];
  }
  
  export interface Flags {
    png: string;
    svg: string;
    alt: string;
  }
  
  export interface CountryName {
    common: string;
    official: string;
    nativeName: NativeName;
  }
  
  export interface NativeName {
    nep: Nep;
  }
  
  export interface Nep {
    official: string;
    common: string;
  }
  
  export interface Idd {
    root: string;
    suffixes: string[];
  }
  