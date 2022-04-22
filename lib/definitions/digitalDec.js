var bitsDec
  , bytesDec;

bitsDec = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobits'
    }
  , to_anchor: 1000
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabits'
    }
  , to_anchor: 1000000
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabits'
    }
  , to_anchor: 1000000000
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabits'
    }
  , to_anchor: 1000000000000
  }
, Pb: {
    name: {
      singular: 'Petabit'
    , plural: 'Petabits'
    }
  , to_anchor: 1000000000000000
  }
, Eb: {
    name: {
      singular: 'Exabit'
    , plural: 'Exabits'
    }
  , to_anchor: 1000000000000000000
  }
, Zb: {
    name: {
      singular: 'Zettabit'
    , plural: 'Zettabits'
    }
  , to_anchor: 1000000000000000000000
  }
, Yb: {
    name: {
      singular: 'Yottabit'
    , plural: 'Yottabits'
    }
  , to_anchor: 1000000000000000000000000
  }
};

bytesDec = {
  B: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobyte'
    , plural: 'Kilobytes'
    }
  , to_anchor: 1000
  }
, MB: {
    name: {
      singular: 'Megabyte'
    , plural: 'Megabytes'
    }
  , to_anchor: 1000000
  }
, GB: {
    name: {
      singular: 'Gigabyte'
    , plural: 'Gigabytes'
    }
  , to_anchor: 1000000000
  }
, TB: {
    name: {
      singular: 'Terabyte'
    , plural: 'Terabytes'
    }
  , to_anchor: 1000000000000
  }
, PB: {
    name: {
      singular: 'Petabyte'
    , plural: 'Petabytes'
    }
  , to_anchor: 1000000000000000
  }
, EB: {
    name: {
      singular: 'Exabyte'
    , plural: 'Exabytes'
    }
  , to_anchor:  1000000000000000000
  }
, ZB: {
    name: {
      singular: 'Zettabyte'
    , plural: 'Zettabytes'
    }
  , to_anchor: 1000000000000000000000
  }
, YB: {
    name: {
      singular: 'Yottabyte'
    , plural: 'Yottabytes'
    }
  , to_anchor: 1000000000000000000000000
  }
};

module.exports = {
  bitsDec: bitsDec
, bytesDec: bytesDec
, _anchors: {
    bitsDec: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytesDec: {
      unit: 'B'
    , ratio: 8
    }
  }
};
