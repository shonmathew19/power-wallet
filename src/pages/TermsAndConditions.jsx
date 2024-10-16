import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


function TermsAndConditions() {
    return (
        <>
            <div className='terms-container'>
                <h1 className='text-center'>Terms and Conditions</h1>
                <p>
                    Welcome to Power Wallet, your trusted platform for online electricity bill
                    payments and related services. By using this website, you agree to the
                    following terms and conditions. Please read them carefully before using
                    our services.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using Power Wallet, you agree to be bound by these Terms
                    and Conditions and our <Link target='_blank' to={'/privacy-policy'} className='me-1'>Privacy Policy</Link>. If
                    you do not agree with any part of these terms, you must not use our
                    services.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                    Power Wallet provides users with an online platform to pay electricity
                    bills and access services related to electricity, including but not
                    limited to new connections, bill history, and other utility-related
                    services. The services are provided "as is" and "as available," and we
                    do not guarantee uninterrupted access to the platform at all times.
                </p>

                <h2>3. User Responsibilities</h2>
                <p>
                    You are responsible for maintaining the confidentiality of your account
                    credentials and for any activity that occurs under your account. You
                    agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h2>4. Payment Processing</h2>
                <p>
                    Power Wallet facilitates the payment of electricity bills on behalf of
                    users through secure payment gateways. We are not responsible for any
                    transaction failures or errors that occur due to issues with your bank
                    or payment provider.
                </p>

                <h2>5. Refunds and Cancellations</h2>
                <p>
                    Payments made through Power Wallet are non-refundable once processed. In
                    the case of incorrect billing or payment errors, please contact the
                    respective electricity provider for dispute resolution.
                </p>

                <h2>6. New Connections</h2>
                <p>
                    Power Wallet offers services for new electricity connections. The
                    availability of new connections is subject to approval by the electricity
                    provider, and we are not responsible for any delays or rejections of
                    applications.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                    Power Wallet will not be held liable for any indirect, incidental, or
                    consequential damages arising from the use or inability to use our
                    services. In no event shall our liability exceed the amount paid by you
                    for the use of the services.
                </p>

                <h2>8. Modification of Terms</h2>
                <p>
                    We reserve the right to modify these Terms and Conditions at any time.
                    Changes will be posted on this page, and continued use of the services
                    will constitute acceptance of the modified terms.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                    These terms shall be governed by and construed in accordance with the
                    laws of India. Any disputes arising from the use of this
                    website will be subject to the jurisdiction of the courts of India.
                </p>

                <h2 id="privacy-policy">10. Privacy Policy</h2>
                <p>
                    Your privacy is important to us. Please review our <Link target='_blank' to={'/privacy-policy'} className='me-1'>Privacy Policy</Link>
                    Privacy Policy for information on how we
                    collect, use, and protect your personal data.
                </p>

                <h2>11. Contact Information</h2>
                <p>
                    If you have any questions or concerns about these Terms and Conditions,
                    please contact us at <a href="mailto:support@powerwallet.com">support@powerwallet.com</a>.
                </p>

                <p>
                    <small>Last updated: [14-10-2024]</small>
                </p>
            </div>
       
        </>
    )
}

export default TermsAndConditions