//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2014 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

/*jshint expr: true*/

describe('Work package filters', function() {

  var t;

  beforeEach(module('openproject.workPackages.filters'));

  describe('remainingFilterNames', function() {
    beforeEach(function(){
      availableFilters = {
        subject: {
          locale_name: 'subject',
          type: 'text'
        },
        created_at: {
          locale_name: 'created_at',
          type: 'date_past'
        },
      };

      selectedFilters = [Factory.build('Filter', {name: 'subject'})];

    });

    it('should be defined', inject(function($filter) {
      expect($filter('remainingFilterNames')).not.to.equal(null);
    }));

    it('should return the names of the remaining filters', inject(function($filter) {
      expect($filter('remainingFilterNames')(availableFilters, selectedFilters)).to.eql(['created_at']);
    }));

    describe('when there are filter locales for the remaining filters', function() {
      beforeEach(function(){
        selectedFilters = [];
      });

      it('respects the alphabetical locale ordering', inject(function($filter, _I18n_) {
        // TODO test this

        // I18n = _I18n_;
        // t = sinon.spy(I18n, 't');
        // expect(t).to.be.called.with('created_at').and.to.return('a');
        // expect(t).to.be.called.with('subject').and.to.return('b');
        // I18n.t('js.filter_labels.created_at')

        // expect($filter('remainingFilterNames')(availableFilters, selectedFilters)).to.eql(['created_at', 'subject']);
      }));
    });
  });

});
