FROM httpd:2.4
LABEL authors="tolan"

COPY ./dist/ /usr/local/apache2/htdocs/