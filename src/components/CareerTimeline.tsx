import React from 'react';

const CareerTimeline = () => {
  const timelineData = [
    {
      year: '2019年',
      title: '入局・コンクール事業部配属',
      department: 'コンクール事業部',
      categories: [
        {
          name: "配属・状況",
          items: [
            '入社したらコンペ事務だった',
            '物理が好きで教養学部卒',
            'エンジニア枠での採用と聞いていたが入社したらコンペ事業部',
            '未経験ながらSolo Learnというサイトで自習していた'
          ]
        }
      ]
    },
    {
      year: '2021年',
      title: '広報・イベント運営・技術開発',
      department: 'コンクール事業部',
      categories: [
        {
          name: "情報発信・広報業務",
          items: [
            'メールニュース作成・配信', 
            'SNSリンク・代表コラム整備'
          ]
        },
        {
          name: "コンペティション・イベント運営",
          items: [
            '入賞者記念コンサート準備・配信対応', 
            '特級ガラコンサート配信支援'
          ]
        },
        {
          name: "経理・内部管理業務",
          items: [
            '会場利用料等の請求処理', 
            '消費税記載統一', 
            '社員用PC資産証明調査'
          ]
        },
        {
          name: "技術開発・システム運用",
          items: [
            'Google Apps Scriptによる自動化（自動返信メール等）', 
            'FileMaker・Trello・スプレッドシート連携', 
            'AppSheet/Power Automate調査・導入検討', 
            'GitHub活用'
          ]
        },
        {
          name: "事務・ドキュメント業務",
          items: [
            '日報・週報提出', 
            'GitHub/Trello連携でプロジェクト管理',
            'チラシ封入業務', 
            '請求・納期・納品数管理'
          ]
        }
      ]
    },
    {
      year: '2022年',
      title: 'システム拡張・運営業務の継続',
      department: 'コンクール事業部',
      categories: [
        {
          name: "情報発信・広報業務",
          items: [
            'チラシ封入業務（請求・納期・納品数管理、個別対応）'
          ]
        },
        {
          name: "コンペティション・イベント運営",
          items: [
            '特級・全国大会の審査集計システム拡張（審査員特別賞追加、FileMaker連携）', 
            'プログラム・参加票発送', 
            '審査員調整', 
            '2023年度コンペ仕様検討会参加'
          ]
        },
        {
          name: "経理・内部管理業務",
          items: [
            '会場利用料等の請求処理', 
            '消費税記載統一', 
            'AFレコード作成指示'
          ]
        },
        {
          name: "技術開発・システム運用",
          items: [
            'Google Apps Scriptによる自動化', 
            'FileMaker・Trello・スプレッドシート連携', 
            'AppSheet/Power Automate調査・導入検討', 
            'GitHub活用'
          ]
        },
        {
          name: "ドキュメント・週報業務",
          items: [
            '日報・週報提出', 
            'GitHub/Trello連携でプロジェクト管理'
          ]
        }
      ]
    },
    {
      year: '2023年上半期',
      title: '本選対応・決済システム移行',
      department: 'コンクール事業部',
      categories: [
        {
          name: "コンペティション運営",
          items: [
            '準本選・本選対応（文言修正、定員管理、マイページ連携、HTMLメール化）', 
            '全国大会準備（申込フォーム改修、決済方法移行）', 
            'システム調整・集計関連（仕様確認、不具合対処）'
          ]
        },
        {
          name: "経理・事務オペレーション",
          items: [
            '請求関連実務（費用支払、業者連携）', 
            '情報整理と業務標準化（チラシ封入パターン整備）'
          ]
        },
        {
          name: "技術サポート・開発支援",
          items: [
            'データベース/集計ツール（設計・修正依頼、システム処理実装・監修）', 
            '決済・フォーム（Stripeコンビニ決済対応、決済方法選定）', 
            '社外技術支援（AWS協力）'
          ]
        },
        {
          name: "社内連携・ドキュメント対応",
          items: [
            'ミーティング資料整備', 
            '週報・やり取り'
          ]
        }
      ]
    },
    {
      year: '2023年下半期',
      title: 'インフラ事業部配属・技術領域拡大',
      department: 'インフラ事業部',
      categories: [
        {
          name: "コンペティション関連",
          items: [
            '予選・本選・動画予選の準備（Web導線整備、地区調整）', 
            '運営委員会との連携（動画予選導入準備）'
          ]
        },
        {
          name: "封入・請求業務",
          items: [
            'ムジカノーヴァ封入業務', 
            '印刷業者との連携・経理対応'
          ]
        },
        {
          name: "技術・開発関連",
          items: [
            'AI・自動化への関心と実践（FileMaker連携ツール自作・紹介）', 
            '外部インフラ・システム管理（AWS/Google Cloudコスト最適化提案）', 
            'セキュリティ・システム保守（GitHub SSHキー確認、Google Cloud証明書更新、ConoHa障害対応）'
          ]
        },
        {
          name: "ナレッジ共有・外部連携",
          items: [
            '技術イベント参加・報告（Google Cloud Next）', 
            '社内講演・セミナー支援（数理キャリアデザインセミナー）'
          ]
        },
        {
          name: "文書・報告業務",
          items: [
            '月例報告', 
            '日報', 
            '社内向け案内'
          ]
        }
      ]
    },
    {
      year: '2024年上半期',
      title: 'AI活用・技術支援の拡大',
      department: 'インフラ事業部',
      categories: [
        {
          name: "コンペティション関連対応",
          items: [
            '結果速報業務協力', 
            '本選に向けた実務連携（Web掲載、参加票送信）', 
            'トラブル対応と改善提案（採点票、講評画面、表示・印刷トラブル）'
          ]
        },
        {
          name: "技術支援・システム改善",
          items: [
            '集計システムに関する助言', 
            'AI活用（請求書AI読み取り協力）', 
            'VPN接続トラブルサポート'
          ]
        },
        {
          name: "日報・事務作業からの連携",
          items: [
            '提携コンクール進捗共有', 
            '社内相談対応'
          ]
        }
      ]
    },
    {
      year: '2024年下半期',
      title: '技術スタック拡大・ツール開発',
      department: 'インフラ事業部',
      categories: [
        {
          name: "インフラ・システム関連",
          items: [
            'Tailscale・VPN関連の不具合対応', 
            'Cloudflareの導入・管理', 
            '残業管理・通知',
            'Microsoft Azureの非営利特典獲得 + Azure導入',
            'Microsoft Clarityの導入',
            'Tailscaleの導入（VPN）',
            'Google Cloudで課金発生と返金対応、予算アラート導入',
            'Cloudflareエコシステムの導入・学習'
          ]
        },
        {
          name: "報告・進捗管理",
          items: [
            '月例レポート提出（Looker Studio）', 
            '同僚との進捗連携'
          ]
        },
        {
          name: "コンテンツ対応",
          items: [
            'Web記事作成・修正依頼', 
            'マイページ連携（チケット情報）',
            '技術記事執筆（Zenn記事・Book）'
          ]
        },
        {
          name: "自動化・ツール開発",
          items: [
            'Slack Bot開発・展開（名刺登録）', 
            'AI校正やJinger連携の技術相談',
            '社内向け便利ツール開発（Slack to timecard, Slack to namecard, Slack to GitHub Issue, Gmailアドオン, FileMakerのメモリ・CPU日次チェック自動化）'
          ]
        },
        {
          name: "技術スキル習得",
          items: [
            'Claude MCPツールのチーム内導入',
            'Rails周辺知識の習得',
            'Hono.js習得',
            '機械学習入門',
            'Rust学習',
            'Gmailアドオン作成',
            'OSS活動（FileMaker Data APIライブラリへの貢献、OSS公開）'
          ]
        }
      ]
    },
    {
      year: '2025年',
      title: 'システム更新・自動化推進',
      department: 'インフラ事業部',
      categories: [
        {
          name: "システム更新・メンテナンス",
          items: [
            'Railsシステムバージョンアップ内製化',
            'Vue.js & Node.jsシステムのアップデート',
            'Vue.js型システムのデプロイの自動化'
          ]
        },
        {
          name: "コンテンツ・配信改善",
          items: [
            'マイページへの会報掲載（Cloudflare Workers/R2導入）',
            'コンペ本選参加票のメール化',
            '東音：本選の結果自動アップ実現'
          ]
        },
        {
          name: "インフラ最適化",
          items: [
            'インフラ サブスク費用削減',
            'GitHub Issueフォーム運用',
            'Cloud Monitoringの導入',
            'コードレビューbot活用'
          ]
        },
        {
          name: "内部プロセス改善",
          items: [
            'ChatGPTの社内普及（試み）',
            '週初ミーティング用資料の自動化',
            '給与・賞与明細電子化システム作成'
          ]
        }
      ]
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">保坂恵吾さんの業務年表</h1>
      
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline vertical line */}
            {index < timelineData.length - 1 && (
              <div className="absolute left-24 top-14 w-1 bg-indigo-300 h-full z-0"></div>
            )}
            
            <div className="flex">
              {/* Year circle */}
              <div className="flex-none w-48 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.year.split('年')[0].slice(-2)}
                </div>
                <div className="mt-2 font-semibold text-lg text-indigo-900">{item.year}</div>
                {item.department && (
                  <div className="mt-1 text-sm bg-indigo-100 text-indigo-800 rounded-md px-2 py-1 inline-block border border-indigo-200 font-medium">
                    {item.department}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-lg shadow-md p-6 flex-grow z-10 border-t-4 border-indigo-400">
                <h3 className="text-xl font-bold mb-4 text-indigo-700 border-b pb-2 border-gray-200">
                  {item.title}
                </h3>
                
                <div className="space-y-6">
                  {item.categories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h4 className="font-semibold text-lg mb-2 bg-indigo-50 text-indigo-800 px-3 py-1 rounded-md inline-block">
                        {category.name}
                      </h4>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        {category.items.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="text-indigo-500 mr-2 font-bold">•</span>
                            <span className="text-gray-800">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
