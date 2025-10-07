#!/usr/bin/env perl
use Mojolicious::Lite;
use lib "lib";
use MyMath::Area qw(circle rectangle triangle square);
use MyMath::Volume qw(cube cuboid sphere cylinder cone);
use JSON::MaybeXS;

# Serve frontend static files
get '/' => sub {
    my $c = shift;
    $c->redirect_to('/index.html');
};

# AREA routes
post '/api/area/:shape' => sub {
    my $c = shift;
    my $shape = $c->param('shape');
    my $data  = $c->req->json;

    my %areas = (
        circle    => sub { circle($data->{radius}) },
        rectangle => sub { rectangle($data->{length}, $data->{breadth}) },
        triangle  => sub { triangle($data->{base}, $data->{height}) },
        square    => sub { square($data->{side}) },
    );

    return $c->render(json => { error => "Invalid shape" }, status => 400)
        unless exists $areas{$shape};

    my $area = $areas{$shape}->();
    $c->render(json => { result => $area });
};

# VOLUME routes
post '/api/volume/:shape' => sub {
    my $c = shift;
    my $shape = $c->param('shape');
    my $data  = $c->req->json;

    my %volumes = (
        cube     => sub { cube($data->{side}) },
        cuboid   => sub { cuboid($data->{length}, $data->{breadth}, $data->{height}) },
        sphere   => sub { sphere($data->{radius}) },
        cylinder => sub { cylinder($data->{radius}, $data->{height}) },
        cone     => sub { cone($data->{radius}, $data->{height}) },
    );

    return $c->render(json => { error => "Invalid shape" }, status => 400)
        unless exists $volumes{$shape};

    my $volume = $volumes{$shape}->();
    $c->render(json => { result => $volume });
};

app->start;
