var bitsBin
  , bytesBin;

bitsBin = {
  // ib is not an actual unit.  We use this nomenclature to differentiate
  // between binary bits and decimal bits.
  ib: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kib: {
    name: {
      singular: 'Kibibit'
    , plural: 'Kibibits'
    }
  , to_anchor: 1024
  }
, Mib: {
    name: {
      singular: 'Mebibit'
    , plural: 'Mebibits'
    }
  , to_anchor: 1048576
  }
, Gib: {
    name: {
      singular: 'Gibibit'
    , plural: 'Gibibits'
    }
  , to_anchor: 1073741824
  }
, Tib: {
    name: {
      singular: 'Tebibit'
    , plural: 'Tebibits'
    }
  , to_anchor: 1099511627776
  }
, Pib: {
    name: {
      singular: 'Pebibit'
    , plural: 'Pebibits'
    }
  , to_anchor: 1125899906842624
  }
, Eib: {
    name: {
      singular: 'Exbibit'
    , plural: 'Exbibits'
    }
  , to_anchor: 1152921504606846976
  }
, Zib: {
    name: {
      singular: 'Zebibit'
    , plural: 'Zebibits'
    }
  , to_anchor: 1180591620717411303424
  }
, Yib: {
    name: {
      singular: 'Yobibit'
    , plural: 'Yobibits'
    }
  , to_anchor: 1208925819614629174706176
  }
};

bytesBin = {
  // iB is not an actual unit.  We use this nomenclature to differentiate
  // between binary bytes and decimal bytes.
  iB: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KiB: {
    name: {
      singular: 'Kibibyte'
    , plural: 'Kibibytes'
    }
  , to_anchor: 1024
  }
, MiB: {
    name: {
      singular: 'Mebibyte'
    , plural: 'Mebibytes'
    }
  , to_anchor: 1048576
  }
, GiB: {
    name: {
      singular: 'Gibibyte'
    , plural: 'Gibibytes'
    }
  , to_anchor: 1073741824
  }
, TiB: {
    name: {
      singular: 'Tebibyte'
    , plural: 'Tebibytes'
    }
  , to_anchor: 1099511627776
  }
, PiB: {
    name: {
        singular: 'Pebibyte'
        , plural: 'Pebibytes'
    }
    , to_anchor: 1125899906842624
  }
, EiB: {
    name: {
        singular: 'Exbibyte'
        , plural: 'Exbibytes'
    }
    , to_anchor: 1152921504606846976
  }
, ZiB: {
    name: {
        singular: 'Zebibyte'
        , plural: 'Zebibytes'
    }
    , to_anchor: 1180591620717411303424
  }
, YiB: {
    name: {
        singular: 'Yobibyte'
        , plural: 'Yobibytes'
    }
    , to_anchor: 1208925819614629174706176
  }
};

module.exports = {
  bitsBin: bitsBin
, bytesBin: bytesBin
, _anchors: {
    bitsBin: {
      unit: 'ib'
    , ratio: 1/8
    }
  , bytesBin: {
      unit: 'iB'
    , ratio: 8
    }
  }
};
