export interface ParentCategory {
  id: number;
  is_default: boolean;
  title: string;
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
}

export interface Avatar {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

export interface FeatureAvatar {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

export interface Support {
  name: string;
  tel: string;
  email: string;
  website: string;
  linkedin: string;
  google_plus: string;
  instagram: string;
  telegram: string;
}

export interface HeaderItem {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer_name: string;
  payment_type: number[];
  price: number;
  price_show?: any;
  avatar: Avatar;
  feature_avatar: FeatureAvatar;
  rank: number;
  short_description: string;
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  price_unit: string;
  total_view: number;
  date_added: Date;
  invest_goal?: any;
  product_staff: any[];
  support: Support;
  is_special: boolean;
  additional_attributes: any[];
  date_published: Date;
  customjson?: any;
  approved_age?: any;
}

export interface Avatar2 {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

export interface FeatureAvatar2 {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

export interface Support2 {
  name: string;
  tel: string;
  email: string;
  website: string;
  linkedin: string;
  google_plus: string;
  instagram: string;
  telegram: string;
}

export interface Customjson {
  asset_id: number;
}

export interface CategoryModel {
  id: number;
  is_default: boolean;
  title: string;
  avatar?: any;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
}

export interface Product {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer_name: string;
  payment_type: number[];
  products: Product[];
  price: number;
  price_show?: any;
  avatar: Avatar2;
  feature_avatar: FeatureAvatar2;
  rank: number;
  short_description: string;
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  price_unit: string;
  total_view: number;
  date_added: Date;
  invest_goal?: any;
  product_staff: any[];
  support: Support2;
  is_special: boolean;
  additional_attributes: any[];
  date_published: Date;
  customjson: Customjson;
  approved_age?: any;
  category: number[];
  description: string;
  category_model: CategoryModel[];
}

export interface Homeitem {
  id: number;
  title: string;
  sub_title: string;
  position: number;
  module: number;
  banner?: any;
  row_type: string;
  products: Product[];
  row_mode: number;
}

export interface RootObject {
  id: number;
  parent_categories: ParentCategory[];
  name: string;
  category: any[];
  tabStrip: any[];
  headeritem: HeaderItem[];
  homeitem: Homeitem[];
}

export interface Child2 {
  id: number;
  is_default: boolean;
  title: string;
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
  childs: any[];
}

export interface Child {
  id: number;
  is_default: boolean;
  title: string;
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
  childs: Child2[];
}

export interface RootObjectChild {
  id: number;
  is_default: boolean;
  title: string;
  avatar?: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent?: any;
  childs?: Child[];
}

export interface ParentCat {
  category: RootObjectChild[];
  headeritem: HeaderItem[];
  homeitem: Homeitem[];
}

export interface CommentsSummery {
  score: number;
  count: number;
}
export interface Producer {
  id: number;
  email: string;
  name: string;
  producer_slug: string;
  avatar?: any;
  description: string;
}
export interface PromotionalContainer {
  id: number;
  video: string;
  external_video: string;
  external_frame?: any;
  img?: any;
  length?: any;
  video_path: string;
  banner: boolean;
  is_confirmed: boolean;
  priority: number;
  product: number;
  aparat_key?: any;
}

export interface CategoryItems {
  id: number;
  name: string;
  name_english: string;
  producer: Producer;
  product_type: number;
  producer_name: string;
  payment_type: number[];
  price: number;
  category?: number[];
  price_show?: any;
  avatar: Avatar;
  feature_avatar: FeatureAvatar;
  rank: number;
  is_enable?: boolean;
  totalInstalled: number;
  description?: string;
  promotionalContainers?: PromotionalContainer[];
  short_description?: string;
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  tags: any[];
  category_model: CategoryModel[];
  comments_summery: CommentsSummery[];
  price_unit: string;
  total_view: number;
  custom_json?: any;
  polls: any[];
  date_added: Date;
  invest_goal?: any;
  product_staff: any[];
  support: Support;
  is_special: boolean;
  additional_attributes: any[];
  date_published: Date;
  customjson?: any;
  approved_age?: any;
}

export interface VoucherData {
  message: string;
  success: boolean;
}
export interface File {
  id: number;
  name: string;
  file: string;
  img?: any;
  sku: string;
  sku_registered: boolean;
  sku_reg_date: Date;
  price: number;
  price_show?: any;
  is_purchased: boolean;
  length: number;
  description: string;
  sub_fa?: any;
  sub_en?: any;
  is_downloadable: boolean;
  price_unit: string;
  is_enable: boolean;
  file_type: number;
  subtitles: any[];
  preview?: any;
  file_redirect: string;
}

export interface ProductDetails {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer: Producer;
  producer_name: string;
  payment_type: number[];
  category: number[];
  price: number;
  price_show?: any;
  avatar: Avatar;
  feature_avatar: FeatureAvatar;
  rank: number;
  totalInstalled: number;
  short_description: string;
  description: string;
  promotionalContainers: PromotionalContainer[];
  is_purchased: boolean;
  comments: number;
  files: File[];
  generic_files: any[];
  director: any[];
  movie_producer: any[];
  cast: any[];
  date_create?: any;
  is_jalali: boolean;
  is_bookmarked: boolean;
  sku: string;
  tags: any[];
  category_model: CategoryModel[];
  comments_summery: CommentsSummery[];
  price_unit: string;
  total_view: number;
  is_enable: boolean;
  custom_json?: any;
  polls: any[];
  date_added: Date;
  invest_goal?: any;
  product_staff: any[];
  support: Support;
  is_special: boolean;
  additional_attributes: any[];
  date_published: Date;
  customjson?: any;
  approved_age?: any;
  last_checked_file?: any;
}

export interface CommentModel {
  id: number;
  title: string;
  score: number;
  comment_text: string;
  likes: number;
  dislikes: number;
  user: string;
  date_added: Date;
  comment_reply: any[];
  user_avatar: string;
  product: number;
  is_read: boolean;
  is_approved: boolean;
  product_name: string;
  date_modify: Date;
}

// export interface RootObject {
//   id: number;
//   name: string;
//   name_english: string;
//   product_type: number;
//   producer_name: string;
//   payment_type: number[];
//   price: number;
//   price_show?: any;
//   avatar: Avatar;
//   feature_avatar: FeatureAvatar;
//   rank: number;
//   totalInstalled: number;
//   short_description: string;
//   is_purchased: boolean;
//   comments: number;
//   is_bookmarked: boolean;
//   sku: string;
//   tags: any[];
//   category_model: CategoryModel[];
//   comments_summery: CommentsSummery[];
//   price_unit: string;
//   total_view: number;
//   custom_json?: any;
//   polls: any[];
//   date_added: Date;
//   invest_goal?: any;
//   product_staff: any[];
//   support: Support;
//   is_special: boolean;
//   additional_attributes: any[];
//   date_published: Date;
//   customjson?: any;
//   approved_age?: any;
// }
