---
title: Inoue et al. (2025)
tags:
  - ARtest
---

# 3. Theoretical Results
We start by stating detailed regularity conditions we impose.

Our main theoretical result is now stated. Recall the definition of the AR statistic $AR_C(\beta_{n,0})$ in (5). The asymptotic size of the subset AR test is defined as
$$AsySz_\alpha=\limsup_{n\to\infty}P_{\chi_n}(AR_C(\beta_{n,0})>c_{1-\alpha,\chi^2_{(d-d_\gamma)}}) \quad \cdots \quad (16)$$
where $P_{\chi_n}$ is the induced probability measure of the process $\chi_n$ on the underlying probability space and where each $\chi_n$ implies a corresponding sequences of parameters $\theta_{n,0}$ under $H_0$. We prove the following result which extends Theorem 1 of GKMC12 to the case of the AR statistic based on the CUE rather than LIML and that allows for nonlinear moment conditions and non-stationary or heterogenous processes with conditional heteroskedasticity.

**Theorem 3.1.** *Assume $0<\alpha<1$ and that Assumptions 1-6 hold for all $\chi_n\in\mathcal X$ and all $n\geq1$. Then the asymptotic size of the $AR_C$ statistic defined in (16) satisfies*
$$AsySz_\alpha=\alpha$$

The challenge in proving Theorem 3.1 under the maintained assumptions of this paper is that the CUE $\hat\gamma_n$ of $\gamma$ is not necessarily unique and may not converge to a well defined limit. Then conventional approximation arguments for the first order conditions of the CUE fail. The proof of Theorem 3.1 is based on a novel approach of regularizing the first order condition.
- We then perturb the pseudo true value $\gamma_{n,0}$ toward a value $\tilde\gamma_{n,0}$ in the direction of the regularized first order conditions.
	- This is done in a way that keeps $\tilde\gamma_{n,0}$ close enough to $\gamma_{n,0}$ for the central limit theorem of Assumption (6) to apply 
	- while at the same time approximately satisfying the first order conditions
- An immediate consequence of the definition of $AR_C(\beta_{m,0})$ is that all sequence $\gamma_{n}$ produce upper bounds because $\arg\min_{\gamma} Q(\beta_{n,0},\gamma)\leq Q(\beta_{n,0},\gamma_n)$ for any sequence $\gamma_n$.
- While $\gamma_{n,0}$ leads to one such upper bound, the bound based on $\gamma_{n,0}$ is too large in the sense that $Q(\beta_{n,0},\gamma_{n,0})$ has a limiting $\chi^2_{d}$ rather than a $\chi^2_{d-d_\gamma}$ distribution.
	- This occurs because $\gamma_{n,0}$ does not satisfy the first order conditions well enough even in an asymptotic sense.
- The perturbed point $\tilde\gamma_{n,0}$ is constructed in such a way that it approximately solves the CUE moment conditions evaluated at the infeasible sequence $\theta_{n,0}$ under $H_0:\beta=\beta_{n,0}$ 
	- and that as a result $Q(\beta_{n,0},\tilde\gamma_{n,0})$ has the desired $\chi^2_{d-d_\gamma}$ distribution in the limit irrespective of whether $\gamma$ is identified or not.
- We stress that $\tilde\gamma_{n,0}$ is a construct exclusively used in the proofs and not needed to compute the test statistic $AR_C(\beta_{n,0}$) itself.

Donald and Newey (2000) show that the CUE moment conditions remove the higher order bias term of a conventional GMM estimator by showing that the CUE moment conditions are centered at zero.
Their insight implies an asymptotic orthogonality condition between the limiting process of the moment function $\hat g_n$ and the residual of the projection of $\hat g_{n,\gamma}$ onto $\hat g_{n,0}$.
The same insight underlies Kleibergen (2005) but only for the case where $\gamma$ is strongly identified.

To show uniform validity, the asymptotic orthogonality needs to be established for all converging subsequences irrespective of whether $\gamma$ is identified or not.
- This then allows to charaterize the upper bound of the $AR_C(\beta_{n,0})$ statistic in terms of a $\chi^2_{d-d_\gamma}$ limiting distribution along all converging subsequences.
- The limiting $\chi^2_{d-d_\gamma}$ distibution is obtained by representing the AR-statistic asymptotically as the sum of squares of the residuals of a projection of the moment conditions $\hat g_n$ onto the column space spanned by the residualized $\hat g_{n,\gamma}$.
	- The rank of this projection residual is $d-d_\gamma$ irrespective of whether $\gamma$ is identified or not.

We now explain the construction of the sequence $\tilde\gamma_{n,0}$ and the proof strategy behind Theorem 3.1 in more detail. Use (2) to define $\hat g_n(\gamma)=\hat g_n(\beta_{n,0},\gamma)$, $\hat g_{n,0}=\hat g_n(\gamma_{n,0})$ and $\tilde g_{n,0}=\hat g_n(\tilde\gamma_{n,0})$. Recall the definition of $\hat g_{n,\gamma}$ in (10) and use (9) to define $\tilde g_{n,\gamma}=\hat g_{n,\gamma}(\tilde\gamma_{n,0})$. Also recall the definition of $\hat\Lambda_n(\gamma)$ in (13) where $\hat\Lambda_n(\gamma)$ has dimension $d^2\times d_\gamma$.
Now construct the matrix
$$\hat A_n=\hat\Omega_{n,0}^{-1/2}(\hat g_{n,\gamma}(\gamma_{n,0})-(I_d\otimes\hat g_{n,0}\hat\Omega_{n,0}^{-1/2})\hat\Lambda_n(\gamma_{n,0})) \quad\cdots\quad (17)$$
and consider the empirical moment conditions
$$0=\hat A_n'\hat\Omega_{n,0}^{-1.2}\hat g_n(\gamma)$$

To gain some intuition for the moment condition (18), we focus on the case where $g_t(\cdot)$ is of the form (3) with $d_q=1$ such that (18) can be written as
$$0=(\hat g_{n,\gamma}-\hat g_{n,0}'\hat\Omega_{n,0}^{-1}\hat\Lambda_{n,0})'\hat\Omega_{n,0}^{-1}\hat g_n(\gamma)$$
As argued in Donald and Newey (2000), $\hat g_{n,0}'\hat\Omega_{n,0}^{-1}\hat\Lambda_{n,0}$ is the projection of $\hat g_{n,\gamma}$ onto $\hat g_{n,0}$ in the case of independently distributed data.
- The term $\hat g_{n,\gamma}-\hat g_{n,0}'\hat\Omega_{n,0}^{-1}\hat\Lambda_{n,0}$ then is the projection residual, which by construction is orthogonal to $\hat g_{n,0}$.
- As shown by Donal and Newey (2000), the orthogonality holds exactly in the iid setting and in *expectation* in a time series framework.
	- The use of long run variance-covariance matrices in the time series case ensure that this interpretation remains valid in the limit in the more general setting of this paper.
- By constructing our perturbed moment vector $\tilde g_{n,0}$ to be close to $\hat g_{n,0}$ and approximately orthogonal to $\hat A_n$, we guarantee that the moment vector $\hat g_{n,0}$ is stochastically independent of the column space spanned by $\hat A_n$ at least in the limit.
- The construction of $\tilde\gamma_{n,0}$ depends on the particular subsequence $n_k$ such that $\tilde\gamma_{n,0}$ is only defined for $n_k$ and may differ for different sequences $n_k$ and $n_{k'}$.

We start with the mean value expansion of $\hat g_n(\gamma)$ around $\gamma_{n,0}$,
$$\hat g_n(\gamma)=\hat g_{n,0}+\hat g_{n,\gamma}(\check \gamma_{n,0})(\gamma-\gamma_{n,0}) \quad \cdots\quad (19)$$
with $||\check\gamma_{n,0}-\gamma_{n,0}||\leq||\gamma-\gamma_{n,0}||$ which upon substitution into the moment conditions (18) leads to
$$0=\hat A_n'\hat \Omega_{n,0}^{-1/2}(\hat g_{n,0}-\hat g_{n,\gamma}(\check\gamma_{n,0})(\gamma_{n,0}-\gamma))\quad\cdots\quad(20)$$

If $\hat A_n$ and $\hat g_{n,\gamma}$ were full coumn rank at least for large enough samples, then one could solve (20) for $\gamma$.
- Under the sequences considered in this paper, both matrices may have reduced ranks for finite $n$ and in the limit.
- Solutions based on the Moore-Penrose inverse have delicate convergence properties, see for example Wedin (1973). 
- In fact, such solutions often do not converge because the operator norm of the MP inverse becomes unbounded as eigenvalues of its argument tend towards zero, see Stewart (1977, Theorem 3.1).
- To stabilize these solutions we adopt a regularization scheme called truncated singular value decomposition (TSVD), see the numerical analysis literature Hanson (1971), Varah (1973) and Hansen (1987).

Let the singular value decomposition, which in this case coincides with the spectral representation of $\hat\Gamma_n=\hat g_{n,\gamma}'\hat\Omega_{n,0}^{-1}\hat g_{n,\gamma}$ be equal to $\hat\Gamma_n=\hat R_n\hat\Delta_n\hat R_n'$ and where $\hat\Delta_n$ is a diagonal matrix of the eigenvalues $\hat\Delta_{1,n}\geq \cdots \geq \hat\Delta_{d_{\gamma},n}\geq0$ of $\hat\Gamma_n$.
- By Assumption 3 and 4 and for a converging subsequence $n_k$, $\hat\Gamma_{n_k}\to_p\Gamma$ such that by Theorem A.1, $\hat\Delta_{j,n_k}\to_p\Delta_j\geq0$.
- Assume that $\Delta_j>0$ for $j\leq r$ and some $0\leq r\leq d_\gamma$.
- Fix $\epsilon$ arbitrary with $\Delta_r>\epsilon>0$.
- For each converging subsequence $n_k$, define $\dot\Delta_{n_k}$ as the matrix with diagonal elements $\dot\Delta_{n_k,j}$ such that for all $l\in\{1,\dots,d_\gamma\}$,
- $$\dot\Delta_{n_k,j}=\begin{cases}\hat\Delta_{n_k,l}&\text{if}\hat\Delta_{n_k,l}>\epsilon\\0&\text{otherwise}\end{cases}$$

The TSVD of $\hat\Gamma_{n_k}$ is now given by
$$\dot\Gamma_{n_k}=\hat R_{n_k}\dot\Delta_{n_k}\hat R_{n_k}'\quad \cdots\quad (21)$$

We construct an infeasible solution $\tilde\gamma_{n_k,0}$ to (20) with two properties.
- The solution $\tilde\gamma_{n,0}$ is a perturbation of $\gamma_{n,0}$ small enough to converge to $\gamma_{n,0}$ but such that is also satisfies (20) with sufficient accuracy in large samples.
- The purpose of the construction is to evaluate the CUE criterion function at a point that allows for a limiting distribution and where the moment conditions of the CUE, and thus orthogonality between $\hat A_{n_k}$ and $\tilde g_{n_k,0}$ hold approximately.
- The parameter $\tilde\gamma_{n_k,0}$ is defined as a perturbation of the parameters $\gamma_{n_k,0}$ in the direction of the first order conditions for the CUE estimator by setting
- $$\tilde\gamma_{n_k,0}=\gamma_{n_k,0}-\dot\Gamma_{n_k}^+\hat A_{n_k}'\hat\Omega_{n_k,0}^{-1/2}\hat g_{n_k,0}\quad\cdots\quad(22)$$
- Note that the MP-inverse of $\dot\Gamma_{n_k}$ denoted by $\dot\Gamma_{n_k}^+$ is continuous and therefore converges along converging subsequences.
	- Continuity of $\dot\Gamma_{n_k}^+$ holds because the eigenvalues of $\dot\Gamma_{n_k}$ are bounded away from zero by $\epsilon$ due to regularization. This is in cantrast to the MP-inverse of $\hat\Gamma_{n_k}$ which may not be continuous and thus not converge along converging subsequences.

The following properties of $\tilde\gamma_{n_k,0}$ can now be established.

**Lemma 3.1.** *Let $\tilde\gamma_{n,0}$ be defined in (22). Let Assumption 1, 2, 3, and 4 hold. Then,*
(i) *for all converging subsequences $n_k$*
$$\tilde\gamma_{n_k,0}-\gamma_{n_k,0}=O_p(n_k^{-1/2})$$
(ii) *for all converging subsequences $n_k$, it follows that the first order condition in (18) evaluated at $\tilde\gamma_{n,0}$ satisfies*
$$\hat A_{n_k}\hat\Omega_{n_k,0}^{-1/2}\hat g_{n_k}(\tilde\gamma_{n_k,0})=o_p(n_k^{-1/2})$$
(iii) *for the projection $P_{\hat A_n}$ onto the column space of $\hat A_n$, it follows that along converging subsequences $n_k$*
$$P_{\hat A_{n_k}}-\hat A_{n_k}\dot\Gamma_{n_k}^+\hat A_{n_k}'=o_p(1)$$


Using Lemma 3.1 and denoting by $P_{\hat A_{n}}$ the projection onto the column space spanned by $\hat A_{n}$ and letting $M_{\hat A_n}=I-P_{\hat A_{n}}$, the proof of Theorem 3.1 then proceeds to show in Lemma A.1 that
$$AR_C(\beta_{n,0})\leq n\tilde g_{n,0}'\tilde\Omega_{n,0}^{-1/2}M_{\hat A_n}\tilde\Omega_{n,0}^{-1/2}\tilde g_{n,0}+\bar\omega_n$$
where along converging subsequences $n_k$,
$$\bar\omega_{n_k}=n_k\tilde g_{n_k}'\tilde\Omega_{n_k}^{-1/2}P_{\hat A_{n_k}}\tilde\Omega_{n_k}^{-1/2}\tilde g_{n_k}=o_p(1)$$

- This result holds because $\tilde g_{n,0}=\hat g_n(\tilde\gamma_{n,0})$ approximately satisfies the orthogonality condition in Lemma 3.1(ii).


With the help of Lemma 3.1 and (22) we show in Lemma A.1 that along converging subsequences
$$n_k\tilde g_{n_k,0}'\tilde\Omega_{n_k,0}^{-1/2}M_{\hat A_{n_k}}\tilde\Omega_{n_k,0}^{-1/2}\tilde g_{n_k,0}=n_k\hat g_{n_k,0}'\hat\Omega_{n_k,0}^{-1/2}M_{\hat A_{n_k}}\hat\Omega_{n_k,0}^{-1/2}\hat g_{n_k,0}+o_p(1)$$


By Assumption 6, $\hat g_{n_k,0}$ converges to a Gaussian limit variable $\omega_\epsilon$.
We show in Lemma A.2 that along converging subsequences $P_{\hat A_{n_k}}\to_dP_A$ where $P_A$ has constant rank $d_\gamma$ independent of the subsequential limit and where $P_A$ is a possible random matrix with elements that are stochastically independent of $\omega_\epsilon$.
- The last result is essentially due to Lemma 3.1(ii) which is at the heart of establishing asymptotic uncorrelatedness between the elements of $\hat A_{n_k}$ and $\hat g_{n_k,0}$ along all converging subsequences.

Combining these results, we establish in Lemma A.3 that $AR_C(\beta_{n,0})$ is bounded above by a random variable that is asymptotically $\chi_{d-d_\gamma}^2$ along all converging subsequences.