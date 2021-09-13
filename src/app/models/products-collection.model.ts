import { Product } from './api-data.model';

export interface Producer {
  id: number;
  email: string;
  name: string;
  producer_slug: string;
  avatar?: any;
  description: string;
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
  video_redirect: string;
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

export interface CategoryModel {
  id: number;
  is_default: boolean;
  title: string;
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
}

export interface CommentsSummery {
  score: number;
  count: number;
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

export interface FeatureProductsObject {
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
  products: Product[];
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
