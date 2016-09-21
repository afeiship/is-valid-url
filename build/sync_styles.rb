#!/usr/bin/env ruby -wU
require 'git'
require 'fileutils'
require 'sync_repositry'

ROOT_PATH = SyncRepositry.discover_root;
TMP_PATH = File.join ROOT_PATH,'/.tmp';
STYLES_PATH = File.join ROOT_PATH,'/src/styles';


FileUtils.rm_rf(TMP_PATH);
SyncRepositry.clone_at 'https://github.com/muicss/mui.git',TMP_PATH;

#list scss:
# FileUtils.cd(tmp) do
#   Dir.glob('**/{.*,*.*}').reject{ |f| f.include? '.scss' }.each do |item|
#     # FileUtils.rm_rf(item);
#   end
#
#   FileUtils.cp_r tmp_src, project_src;
# end
