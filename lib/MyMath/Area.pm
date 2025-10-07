# lib/MyMath/Area.pm
package MyMath::Area;

use strict;
use warnings;
use Exporter 'import';

our @EXPORT_OK = qw(circle rectangle triangle square);

use constant PI => 3.141592653589793;

sub circle {
    my ($r) = @_;
    return undef unless defined $r;
    return PI * $r * $r;
}

sub rectangle {
    my ($l, $w) = @_;
    return undef unless defined $l && defined $w;
    return $l * $w;
}

sub triangle {
    my ($b, $h) = @_;
    return undef unless defined $b && defined $h;
    return 0.5 * $b * $h;
}

sub square {
    my ($s) = @_;
    return undef unless defined $s;
    return $s * $s;
}

1;