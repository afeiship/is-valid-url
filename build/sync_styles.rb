#!/usr/bin/env ruby -wU
require 'git'
require 'fileutils'
require 'sync_repositry'

ROOT_PATH = SyncRepositry.discover_root;
TMP_PATH = File.join ROOT_PATH,'/.tmp';
STYLES_PATH = File.join ROOT_PATH,'/src/styles';

class SyncStyles
  def self.clone_mui
    FileUtils.rm_rf(TMP_PATH);
    SyncRepositry.clone_at 'https://github.com/muicss/mui.git',TMP_PATH;
  end

  def self.sync_to_src
    FileUtils.rm_rf Dir.glob(File.join(STYLES_PATH,'**'));
    FileUtils.cp_r Dir.glob(File.join(TMP_PATH,'/src/sass/**')), STYLES_PATH;
  end
end

# App start: `clone_mui sync_to_src`
if SyncStyles.singleton_methods.include?(ARGV[0].to_sym)
  eval "SyncStyles.#{ARGV[0]}";
else
  puts "Invalid methods #{ARGV[0]}";
end
