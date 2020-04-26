require "rubygems"
require "bundler/setup"
require "jekyll"

namespace :site do
  namespace :production do
    output_dir = "_site_production"

    task :generate do
      Jekyll::Site.new(Jekyll.configuration({
        "source"      => ".",
        "destination" => "#{output_dir}"
      })).process

      system "cp .htaccess #{output_dir}/.htaccess"
    end

    task :publish do
      system "scp -o StrictHostKeyChecking=no -r #{output_dir}/. pawelizd@pawelizdebski.kylos.pl:public_html/"
    end

    task :clean do
      system "rm -rf #{output_dir}"
    end
  end

  namespace :test do
    output_dir = "_site_test"

    task :generate do
      Jekyll::Site.new(Jekyll.configuration({
        "source"      => ".",
        "destination" => "#{output_dir}",
        "url"         => "https://test.pawelizdebski.pl"
      })).process

      system "cp .htaccess #{output_dir}/.htaccess"
    end

    task :publish do
      system "scp -o StrictHostKeyChecking=no -r #{output_dir}/. pawelizd@pawelizdebski.kylos.pl:public_html/_test/"
    end

    task :clean do
      system "rm -rf #{output_dir}"
    end
  end
end
