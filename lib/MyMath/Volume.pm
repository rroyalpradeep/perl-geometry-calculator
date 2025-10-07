# lib/MyMath/Volume.pm
package MyMath::Volume;

use strict;
use warnings;
use Exporter 'import';

our @EXPORT_OK = qw(cube cuboid sphere cylinder cone);

use constant PI => 3.141592653589793;

sub cube {
    my ($s) = @_;
    return undef unless defined $s;
    return $s ** 3;
}

sub cuboid {
    my ($l, $w, $h) = @_;
    return undef unless defined $l && defined $w && defined $h;
    return $l * $w * $h;
}

sub sphere {
    my ($r) = @_;
    return undef unless defined $r;
    return (4/3) * PI * ($r ** 3);
}

sub cylinder {
    my ($r, $h) = @_;
    return undef unless defined $r && defined $h;
    return PI * ($r ** 2) * $h;
}

sub cone {
    my ($r, $h) = @_;
    return undef unless defined $r && defined $h;
    return (1/3) * PI * ($r ** 2) * $h;
}

1;