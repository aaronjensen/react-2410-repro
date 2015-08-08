const React = require('react');

const WizardPage0 = require('app/components/wizard/page0');
const WizardPage1 = require('app/components/wizard/page1');

const Wizard = React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },

  componentWillMount() {
    this.props.load(this.props.params.id, this.props.params.pageNumber);
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id ||
      this.props.params.pageNumber !== nextProps.params.pageNumber) {
      nextProps.load(nextProps.params.id, nextProps.params.pageNumber);
    }
  },

  getUser() {
    return this.props.user;
  },

  goToNextPage(e) {
    e.preventDefault();
    this.context.store.getState().router.transitionTo('wizardForm', { id: this.props.referral.id, pageNumber: "1" });
  },

  render() {
    const Form = this.props.currentPage === "1" ? WizardPage1 : WizardPage0;
    return (
      <Form onSubmit={this.goToNextPage}/>
    );
  }
});

module.exports = Wizard;
