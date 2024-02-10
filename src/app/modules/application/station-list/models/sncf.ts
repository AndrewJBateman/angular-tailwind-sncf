export interface SncfResponse {
  context: {
    current_datetime: string;
    timezone: string;
  }
  feed_publishers: Feed[];
  links: Link[];
  places: Place[];
  warnings: Warning[];
};

export interface Feed {
  id: string;
  license: string;
  name: string;
  url: string;
};

export interface Link {
  href: string;
  rel: string;
  templated: boolean;
  type: string;
}

export interface Place {
  embedded_type: string;
  id: string;
  name: string;
  quality: number;
  stop_area: {
    administrative_regions: AdminReg[];
    codes: Code[]
    comment: string | null;
    commercial_modes: Mode[];
    coord: {
      lat: string;
      lon: string;
    };
    id: string;
    label: string;
    lines: Line[];
    name: string;
    physical_modes: Mode[];
    timezone: string;
  }
}

export interface AdminReg {
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

export interface Code {
  type: string;
  value: string;
}

export interface Mode {
  id: string;
  name: string;
}

export interface Line {
  code: string;
  color: string;
  commercial_mode: Mode[];
  id: string;
  name: string;
  network: {
    id: string;
    name: string;
  };
  physical_modes: Mode[];
  text_color: string;
}

export interface Warning {
  id: string;
  message: string;
}
