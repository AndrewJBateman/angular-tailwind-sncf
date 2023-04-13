export interface ISncfResponse {
  context: {
    current_datetime: string;
    timezone: string;
  }
  feed_publishers: Ifeed[];
  links: ILink[];
  places: IPlace[];
  warnings: IWarning[];
};

export interface Ifeed {
  id: string;
  license: string;
  name: string;
  url: string;
};

export interface ILink {
  href: string;
  rel: string;
  templated: boolean;
  type: string;
}

export interface IPlace {
  embedded_type: string;
  id: string;
  name: string;
  quality: number;
  stop_area: {
    administrative_regions: IAdminReg[];
    codes: ICode[]
    comment: string | null;
    commercial_modes: IMode[];
    coord: {
      lat: string;
      lon: string;
    };
    id: string;
    label: string;
    lines: ILine[];
    name: string;
    physical_modes: IMode[];
    timezone: string;
  }
}

export interface IAdminReg {
  coord: {
    lat: string;
    lon: string;
  }
  id: string;
  insee: string;
  label: string;
  level: number;
  name: string;
  zip_code: string;
}

export interface ICode {
  type: string;
  value: string;
}

export interface IMode {
  id: string;
  name: string;
}

export interface ILine {
  code: string;
  color: string;
  commercial_mode: IMode[];
  id: string;
  name: string;
  network: {
    id: string;
    name: string;
  };
  physical_modes: IMode[];
  text_color: string;
}

export interface IWarning {
  id: string;
  message: string;
}
