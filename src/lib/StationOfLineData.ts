import type { MetroLineID } from '@/lib/types'

interface Station {
  sequence: number
  stationID: string
  stationName: {
    zhTW: string
    en: string
  }
  cumulativeDistance: number
}

interface StationWithLineID extends Station {
  lineID: MetroLineID
}

interface StationOfLine {
  lineID: MetroLineID
  stations: Station[]
}

const stationOfLineData: StationOfLine[] = [
  {
    lineID: 'BL',
    stations: [
      {
        sequence: 1,
        stationID: 'BL01',
        stationName: {
          zhTW: '頂埔',
          en: 'Dingpu',
        },
        cumulativeDistance: 0,
      },
      {
        sequence: 2,
        stationID: 'BL02',
        stationName: {
          zhTW: '永寧',
          en: 'Yongning',
        },
        cumulativeDistance: 1.95,
      },
      {
        sequence: 3,
        stationID: 'BL03',
        stationName: {
          zhTW: '土城',
          en: 'Tucheng',
        },
        cumulativeDistance: 3.06,
      },
      {
        sequence: 4,
        stationID: 'BL04',
        stationName: {
          zhTW: '海山',
          en: 'Haishan',
        },
        cumulativeDistance: 4.53,
      },
      {
        sequence: 5,
        stationID: 'BL05',
        stationName: {
          zhTW: '亞東醫院',
          en: 'Far Eastern Hospital',
        },
        cumulativeDistance: 6.17,
      },
      {
        sequence: 6,
        stationID: 'BL06',
        stationName: {
          zhTW: '府中',
          en: 'Fuzhong',
        },
        cumulativeDistance: 7.45,
      },
      {
        sequence: 7,
        stationID: 'BL07',
        stationName: {
          zhTW: '板橋',
          en: 'Banqiao',
        },
        cumulativeDistance: 8.1,
      },
      {
        sequence: 8,
        stationID: 'BL08',
        stationName: {
          zhTW: '新埔',
          en: 'Xinpu',
        },
        cumulativeDistance: 9.38,
      },
      {
        sequence: 9,
        stationID: 'BL09',
        stationName: {
          zhTW: '江子翠',
          en: 'Jiangzicui',
        },
        cumulativeDistance: 10.25,
      },
      {
        sequence: 10,
        stationID: 'BL10',
        stationName: {
          zhTW: '龍山寺',
          en: 'Longshan Temple',
        },
        cumulativeDistance: 13.33,
      },
      {
        sequence: 11,
        stationID: 'BL11',
        stationName: {
          zhTW: '西門',
          en: 'Ximen',
        },
        cumulativeDistance: 14.64,
      },
      {
        sequence: 12,
        stationID: 'BL12',
        stationName: {
          zhTW: '台北車站',
          en: 'Taipei Main Station',
        },
        cumulativeDistance: 15.99,
      },
      {
        sequence: 13,
        stationID: 'BL13',
        stationName: {
          zhTW: '善導寺',
          en: 'Shandao Temple',
        },
        cumulativeDistance: 16.67,
      },
      {
        sequence: 14,
        stationID: 'BL14',
        stationName: {
          zhTW: '忠孝新生',
          en: 'Zhongxiao Xinsheng',
        },
        cumulativeDistance: 17.61,
      },
      {
        sequence: 15,
        stationID: 'BL15',
        stationName: {
          zhTW: '忠孝復興',
          en: 'Zhongxiao Fuxing',
        },
        cumulativeDistance: 18.73,
      },
      {
        sequence: 16,
        stationID: 'BL16',
        stationName: {
          zhTW: '忠孝敦化',
          en: 'Zhongxiao Dunhua',
        },
        cumulativeDistance: 19.4,
      },
      {
        sequence: 17,
        stationID: 'BL17',
        stationName: {
          zhTW: '國父紀念館',
          en: 'Sun Yat-Sen Memorial Hall',
        },
        cumulativeDistance: 20.13,
      },
      {
        sequence: 18,
        stationID: 'BL18',
        stationName: {
          zhTW: '市政府',
          en: 'Taipei City Hall',
        },
        cumulativeDistance: 20.97,
      },
      {
        sequence: 19,
        stationID: 'BL19',
        stationName: {
          zhTW: '永春',
          en: 'Yongchun',
        },
        cumulativeDistance: 21.96,
      },
      {
        sequence: 20,
        stationID: 'BL20',
        stationName: {
          zhTW: '後山埤',
          en: 'Houshanpi',
        },
        cumulativeDistance: 22.78,
      },
      {
        sequence: 21,
        stationID: 'BL21',
        stationName: {
          zhTW: '昆陽',
          en: 'Kunyang',
        },
        cumulativeDistance: 24.14,
      },
      {
        sequence: 22,
        stationID: 'BL22',
        stationName: {
          zhTW: '南港',
          en: 'Nangang',
        },
        cumulativeDistance: 25.56,
      },
      {
        sequence: 23,
        stationID: 'BL23',
        stationName: {
          zhTW: '南港展覽館',
          en: 'Taipei Nangang Exhibition Center',
        },
        cumulativeDistance: 26.65,
      },
    ],
  },
  {
    lineID: 'BR',
    stations: [
      {
        sequence: 1,
        stationID: 'BR01',
        stationName: {
          zhTW: '動物園',
          en: 'Taipei Zoo',
        },
        cumulativeDistance: 0,
      },
      {
        sequence: 2,
        stationID: 'BR02',
        stationName: {
          zhTW: '木柵',
          en: 'Muzha',
        },
        cumulativeDistance: 0.68,
      },
      {
        sequence: 3,
        stationID: 'BR03',
        stationName: {
          zhTW: '萬芳社區',
          en: 'Wanfang Community',
        },
        cumulativeDistance: 1.2,
      },
      {
        sequence: 4,
        stationID: 'BR04',
        stationName: {
          zhTW: '萬芳醫院',
          en: 'Wanfang Hospital',
        },
        cumulativeDistance: 2.34,
      },
      {
        sequence: 5,
        stationID: 'BR05',
        stationName: {
          zhTW: '辛亥',
          en: 'Xinhai',
        },
        cumulativeDistance: 3.1,
      },
      {
        sequence: 6,
        stationID: 'BR06',
        stationName: {
          zhTW: '麟光',
          en: 'Linguang',
        },
        cumulativeDistance: 4.7,
      },
      {
        sequence: 7,
        stationID: 'BR07',
        stationName: {
          zhTW: '六張犁',
          en: 'Liuzhangli',
        },
        cumulativeDistance: 5.52,
      },
      {
        sequence: 8,
        stationID: 'BR08',
        stationName: {
          zhTW: '科技大樓',
          en: 'Technology Building',
        },
        cumulativeDistance: 6.65,
      },
      {
        sequence: 9,
        stationID: 'BR09',
        stationName: {
          zhTW: '大安',
          en: 'Daan',
        },
        cumulativeDistance: 7.4,
      },
      {
        sequence: 10,
        stationID: 'BR10',
        stationName: {
          zhTW: '忠孝復興',
          en: 'Zhongxiao Fuxing',
        },
        cumulativeDistance: 8.29,
      },
      {
        sequence: 11,
        stationID: 'BR11',
        stationName: {
          zhTW: '南京復興',
          en: 'Nanjing Fuxing',
        },
        cumulativeDistance: 9.56,
      },
      {
        sequence: 12,
        stationID: 'BR12',
        stationName: {
          zhTW: '中山國中',
          en: 'Zhongshan Junior High School',
        },
        cumulativeDistance: 10.49,
      },
      {
        sequence: 13,
        stationID: 'BR13',
        stationName: {
          zhTW: '松山機場',
          en: 'Songshan Airport',
        },
        cumulativeDistance: 11.97,
      },
      {
        sequence: 14,
        stationID: 'BR14',
        stationName: {
          zhTW: '大直',
          en: 'Dazhi',
        },
        cumulativeDistance: 14.55,
      },
      {
        sequence: 15,
        stationID: 'BR15',
        stationName: {
          zhTW: '劍南路',
          en: 'Jiannan Rd.',
        },
        cumulativeDistance: 15.88,
      },
      {
        sequence: 16,
        stationID: 'BR16',
        stationName: {
          zhTW: '西湖',
          en: 'Xihu',
        },
        cumulativeDistance: 17.17,
      },
      {
        sequence: 17,
        stationID: 'BR17',
        stationName: {
          zhTW: '港墘',
          en: 'Gangqian',
        },
        cumulativeDistance: 17.99,
      },
      {
        sequence: 18,
        stationID: 'BR18',
        stationName: {
          zhTW: '文德',
          en: 'Wende',
        },
        cumulativeDistance: 19,
      },
      {
        sequence: 19,
        stationID: 'BR19',
        stationName: {
          zhTW: '內湖',
          en: 'Neihu',
        },
        cumulativeDistance: 20.13,
      },
      {
        sequence: 20,
        stationID: 'BR20',
        stationName: {
          zhTW: '大湖公園',
          en: 'Dahu Park',
        },
        cumulativeDistance: 21,
      },
      {
        sequence: 21,
        stationID: 'BR21',
        stationName: {
          zhTW: '葫洲',
          en: 'Huzhou',
        },
        cumulativeDistance: 22.63,
      },
      {
        sequence: 22,
        stationID: 'BR22',
        stationName: {
          zhTW: '東湖',
          en: 'Donghu',
        },
        cumulativeDistance: 23.48,
      },
      {
        sequence: 23,
        stationID: 'BR23',
        stationName: {
          zhTW: '南港軟體園區',
          en: 'Nangang Software Park',
        },
        cumulativeDistance: 24.52,
      },
      {
        sequence: 24,
        stationID: 'BR24',
        stationName: {
          zhTW: '南港展覽館',
          en: 'Taipei Nangang Exhibition Center',
        },
        cumulativeDistance: 25.17,
      },
    ],
  },
  {
    lineID: 'G',
    stations: [
      {
        sequence: 1,
        stationID: 'G01',
        stationName: {
          zhTW: '新店',
          en: 'Xindian',
        },
        cumulativeDistance: 0,
      },
      {
        sequence: 2,
        stationID: 'G02',
        stationName: {
          zhTW: '新店區公所',
          en: 'Xindian District Office',
        },
        cumulativeDistance: 1.11,
      },
      {
        sequence: 3,
        stationID: 'G03',
        stationName: {
          zhTW: '七張',
          en: 'Qizhang',
        },
        cumulativeDistance: 2.01,
      },
      {
        sequence: 4,
        stationID: 'G04',
        stationName: {
          zhTW: '大坪林',
          en: 'Dapinglin',
        },
        cumulativeDistance: 2.86,
      },
      {
        sequence: 5,
        stationID: 'G05',
        stationName: {
          zhTW: '景美',
          en: 'Jingmei',
        },
        cumulativeDistance: 4.01,
      },
      {
        sequence: 6,
        stationID: 'G06',
        stationName: {
          zhTW: '萬隆',
          en: 'Wanlong',
        },
        cumulativeDistance: 5.07,
      },
      {
        sequence: 7,
        stationID: 'G07',
        stationName: {
          zhTW: '公館',
          en: 'Gongguan',
        },
        cumulativeDistance: 6.63,
      },
      {
        sequence: 8,
        stationID: 'G08',
        stationName: {
          zhTW: '台電大樓',
          en: 'Taipower Building',
        },
        cumulativeDistance: 7.53,
      },
      {
        sequence: 9,
        stationID: 'G09',
        stationName: {
          zhTW: '古亭',
          en: 'Guting',
        },
        cumulativeDistance: 8.41,
      },
      {
        sequence: 10,
        stationID: 'G10',
        stationName: {
          zhTW: '中正紀念堂',
          en: 'Chiang Kai-Shek Memorial Hall',
        },
        cumulativeDistance: 9.34,
      },
      {
        sequence: 11,
        stationID: 'G11',
        stationName: {
          zhTW: '小南門',
          en: 'Xiaonanmen',
        },
        cumulativeDistance: 10.1,
      },
      {
        sequence: 12,
        stationID: 'G12',
        stationName: {
          zhTW: '西門',
          en: 'Ximen',
        },
        cumulativeDistance: 10.92,
      },
      {
        sequence: 13,
        stationID: 'G13',
        stationName: {
          zhTW: '北門',
          en: 'Beimen',
        },
        cumulativeDistance: 11.73,
      },
      {
        sequence: 14,
        stationID: 'G14',
        stationName: {
          zhTW: '中山',
          en: 'Zhongshan',
        },
        cumulativeDistance: 12.99,
      },
      {
        sequence: 15,
        stationID: 'G15',
        stationName: {
          zhTW: '松江南京',
          en: 'Songjiang Nanjing',
        },
        cumulativeDistance: 14.29,
      },
      {
        sequence: 16,
        stationID: 'G16',
        stationName: {
          zhTW: '南京復興',
          en: 'Nanjing Fuxing',
        },
        cumulativeDistance: 15.28,
      },
      {
        sequence: 17,
        stationID: 'G17',
        stationName: {
          zhTW: '台北小巨蛋',
          en: 'Taipei Arena',
        },
        cumulativeDistance: 16.22,
      },
      {
        sequence: 18,
        stationID: 'G18',
        stationName: {
          zhTW: '南京三民',
          en: 'Nanjing Sanmin',
        },
        cumulativeDistance: 17.42,
      },
      {
        sequence: 19,
        stationID: 'G19',
        stationName: {
          zhTW: '松山',
          en: 'Songshan',
        },
        cumulativeDistance: 18.77,
      },
      {
        sequence: 20,
        stationID: 'G03A',
        stationName: {
          zhTW: '小碧潭',
          en: 'Xiaobitan',
        },
        cumulativeDistance: 1.94,
      },
    ],
  },
  {
    lineID: 'O',
    stations: [
      {
        sequence: 1,
        stationID: 'O01',
        stationName: {
          zhTW: '南勢角',
          en: 'Nanshijiao',
        },
        cumulativeDistance: 0,
      },
      {
        sequence: 2,
        stationID: 'O02',
        stationName: {
          zhTW: '景安',
          en: 'Jingan',
        },
        cumulativeDistance: 0.81,
      },
      {
        sequence: 3,
        stationID: 'O03',
        stationName: {
          zhTW: '永安市場',
          en: 'Yongan Market',
        },
        cumulativeDistance: 1.89,
      },
      {
        sequence: 4,
        stationID: 'O04',
        stationName: {
          zhTW: '頂溪',
          en: 'Dingxi',
        },
        cumulativeDistance: 3.22,
      },
      {
        sequence: 5,
        stationID: 'O05',
        stationName: {
          zhTW: '古亭',
          en: 'Guting',
        },
        cumulativeDistance: 5.36,
      },
      {
        sequence: 6,
        stationID: 'O06',
        stationName: {
          zhTW: '東門',
          en: 'Dongmen',
        },
        cumulativeDistance: 6.94,
      },
      {
        sequence: 7,
        stationID: 'O07',
        stationName: {
          zhTW: '忠孝新生',
          en: 'Zhongxiao Xinsheng',
        },
        cumulativeDistance: 8.14,
      },
      {
        sequence: 8,
        stationID: 'O08',
        stationName: {
          zhTW: '松江南京',
          en: 'Songjiang Nanjing',
        },
        cumulativeDistance: 9.28,
      },
      {
        sequence: 9,
        stationID: 'O09',
        stationName: {
          zhTW: '行天宮',
          en: 'Xingtian Temple',
        },
        cumulativeDistance: 10.08,
      },
      {
        sequence: 10,
        stationID: 'O10',
        stationName: {
          zhTW: '中山國小',
          en: 'Zhongshan Elementary School',
        },
        cumulativeDistance: 11.03,
      },
      {
        sequence: 11,
        stationID: 'O11',
        stationName: {
          zhTW: '民權西路',
          en: 'Minquan W. Rd.',
        },
        cumulativeDistance: 11.74,
      },
      {
        sequence: 12,
        stationID: 'O12',
        stationName: {
          zhTW: '大橋頭',
          en: 'Daqiaotou',
        },
        cumulativeDistance: 12.4,
      },
      {
        sequence: 13,
        stationID: 'O13',
        stationName: {
          zhTW: '台北橋',
          en: 'Taipei Bridge',
        },
        cumulativeDistance: 13.73,
      },
      {
        sequence: 14,
        stationID: 'O14',
        stationName: {
          zhTW: '菜寮',
          en: 'Cailiao',
        },
        cumulativeDistance: 14.72,
      },
      {
        sequence: 15,
        stationID: 'O15',
        stationName: {
          zhTW: '三重',
          en: 'Sanchong',
        },
        cumulativeDistance: 15.59,
      },
      {
        sequence: 16,
        stationID: 'O16',
        stationName: {
          zhTW: '先嗇宮',
          en: 'Xianse Temple',
        },
        cumulativeDistance: 17.31,
      },
      {
        sequence: 17,
        stationID: 'O17',
        stationName: {
          zhTW: '頭前庄',
          en: 'Touqianzhuang',
        },
        cumulativeDistance: 18.58,
      },
      {
        sequence: 18,
        stationID: 'O18',
        stationName: {
          zhTW: '新莊',
          en: 'Xinzhuang',
        },
        cumulativeDistance: 19.6,
      },
      {
        sequence: 19,
        stationID: 'O19',
        stationName: {
          zhTW: '輔大',
          en: 'Fu Jen University',
        },
        cumulativeDistance: 21.34,
      },
      {
        sequence: 20,
        stationID: 'O20',
        stationName: {
          zhTW: '丹鳳',
          en: 'Danfeng',
        },
        cumulativeDistance: 22.71,
      },
      {
        sequence: 21,
        stationID: 'O21',
        stationName: {
          zhTW: '迴龍',
          en: 'Huilong',
        },
        cumulativeDistance: 24.11,
      },
      {
        sequence: 50,
        stationID: 'O50',
        stationName: {
          zhTW: '三重國小',
          en: 'Sanchong Elementary School',
        },
        cumulativeDistance: 14.28,
      },
      {
        sequence: 51,
        stationID: 'O51',
        stationName: {
          zhTW: '三和國中',
          en: 'Sanhe Junior High School',
        },
        cumulativeDistance: 15.51,
      },
      {
        sequence: 52,
        stationID: 'O52',
        stationName: {
          zhTW: '徐匯中學',
          en: 'St.lgnatius High School',
        },
        cumulativeDistance: 16.34,
      },
      {
        sequence: 53,
        stationID: 'O53',
        stationName: {
          zhTW: '三民高中',
          en: 'Sanmin Senior High School',
        },
        cumulativeDistance: 17.24,
      },
      {
        sequence: 54,
        stationID: 'O54',
        stationName: {
          zhTW: '蘆洲',
          en: 'Luzhou',
        },
        cumulativeDistance: 18.41,
      },
    ],
  },
  {
    lineID: 'R',
    stations: [
      {
        sequence: 1,
        stationID: 'R02',
        stationName: {
          zhTW: '象山',
          en: 'Xiangshan',
        },
        cumulativeDistance: 0,
      },
      {
        sequence: 2,
        stationID: 'R03',
        stationName: {
          zhTW: '台北101/世貿',
          en: 'Taipei 101/World Trade Center',
        },
        cumulativeDistance: 0.74,
      },
      {
        sequence: 3,
        stationID: 'R04',
        stationName: {
          zhTW: '信義安和',
          en: 'Xinyi Anhe',
        },
        cumulativeDistance: 1.73,
      },
      {
        sequence: 4,
        stationID: 'R05',
        stationName: {
          zhTW: '大安',
          en: 'Daan',
        },
        cumulativeDistance: 2.72,
      },
      {
        sequence: 5,
        stationID: 'R06',
        stationName: {
          zhTW: '大安森林公園',
          en: 'Daan Park',
        },
        cumulativeDistance: 3.51,
      },
      {
        sequence: 6,
        stationID: 'R07',
        stationName: {
          zhTW: '東門',
          en: 'Dongmen',
        },
        cumulativeDistance: 4.18,
      },
      {
        sequence: 7,
        stationID: 'R08',
        stationName: {
          zhTW: '中正紀念堂',
          en: 'Chiang Kai-Shek Memorial Hall',
        },
        cumulativeDistance: 5.74,
      },
      {
        sequence: 8,
        stationID: 'R09',
        stationName: {
          zhTW: '台大醫院',
          en: 'NTU Hospital',
        },
        cumulativeDistance: 6.73,
      },
      {
        sequence: 9,
        stationID: 'R10',
        stationName: {
          zhTW: '台北車站',
          en: 'Taipei Main Station',
        },
        cumulativeDistance: 7.36,
      },
      {
        sequence: 10,
        stationID: 'R11',
        stationName: {
          zhTW: '中山',
          en: 'Zhongshan',
        },
        cumulativeDistance: 8.02,
      },
      {
        sequence: 11,
        stationID: 'R12',
        stationName: {
          zhTW: '雙連',
          en: 'Shuanglian',
        },
        cumulativeDistance: 8.57,
      },
      {
        sequence: 12,
        stationID: 'R13',
        stationName: {
          zhTW: '民權西路',
          en: 'Minquan W. Rd.',
        },
        cumulativeDistance: 9.1,
      },
      {
        sequence: 13,
        stationID: 'R14',
        stationName: {
          zhTW: '圓山',
          en: 'Yuanshan',
        },
        cumulativeDistance: 10.13,
      },
      {
        sequence: 14,
        stationID: 'R15',
        stationName: {
          zhTW: '劍潭',
          en: 'Jiantan',
        },
        cumulativeDistance: 11.65,
      },
      {
        sequence: 15,
        stationID: 'R16',
        stationName: {
          zhTW: '士林',
          en: 'Shilin',
        },
        cumulativeDistance: 12.74,
      },
      {
        sequence: 16,
        stationID: 'R17',
        stationName: {
          zhTW: '芝山',
          en: 'Zhishan',
        },
        cumulativeDistance: 13.84,
      },
      {
        sequence: 17,
        stationID: 'R18',
        stationName: {
          zhTW: '明德',
          en: 'Mingde',
        },
        cumulativeDistance: 14.72,
      },
      {
        sequence: 18,
        stationID: 'R19',
        stationName: {
          zhTW: '石牌',
          en: 'Shipai',
        },
        cumulativeDistance: 15.32,
      },
      {
        sequence: 19,
        stationID: 'R20',
        stationName: {
          zhTW: '唭哩岸',
          en: 'Qilian',
        },
        cumulativeDistance: 16.58,
      },
      {
        sequence: 20,
        stationID: 'R21',
        stationName: {
          zhTW: '奇岩',
          en: 'Qiyan',
        },
        cumulativeDistance: 17.41,
      },
      {
        sequence: 21,
        stationID: 'R22',
        stationName: {
          zhTW: '北投',
          en: 'Beitou',
        },
        cumulativeDistance: 18.17,
      },
      {
        sequence: 22,
        stationID: 'R23',
        stationName: {
          zhTW: '復興崗',
          en: 'Fuxinggang',
        },
        cumulativeDistance: 19.78,
      },
      {
        sequence: 23,
        stationID: 'R24',
        stationName: {
          zhTW: '忠義',
          en: 'Zhongyi',
        },
        cumulativeDistance: 21.23,
      },
      {
        sequence: 24,
        stationID: 'R25',
        stationName: {
          zhTW: '關渡',
          en: 'Guandu',
        },
        cumulativeDistance: 22.1,
      },
      {
        sequence: 25,
        stationID: 'R26',
        stationName: {
          zhTW: '竹圍',
          en: 'Zhuwei',
        },
        cumulativeDistance: 24.24,
      },
      {
        sequence: 26,
        stationID: 'R27',
        stationName: {
          zhTW: '紅樹林',
          en: 'Hongshulin',
        },
        cumulativeDistance: 26.15,
      },
      {
        sequence: 27,
        stationID: 'R28',
        stationName: {
          zhTW: '淡水',
          en: 'Tamsui',
        },
        cumulativeDistance: 28.24,
      },
      {
        sequence: 28,
        stationID: 'R22A',
        stationName: {
          zhTW: '新北投',
          en: 'Xinbeitou',
        },
        cumulativeDistance: 1.03,
      },
    ],
  },
]

export default stationOfLineData

/** 取得指定站名的車站資訊（多線交會的站點會有多筆資料） */
export function getStationInfosByName(name: string) {
  const result: StationWithLineID[] = []

  for (const line of stationOfLineData) {
    for (const station of line.stations) {
      if (
        name.replace('站', '') === station.stationName.zhTW.replace('站', '') ||
        name.toLowerCase() === station.stationName.en.toLowerCase()
      ) {
        result.push({
          ...station,
          lineID: line.lineID,
        })
      }
    }
  }

  return result.length !== 0 ? result : null
}
